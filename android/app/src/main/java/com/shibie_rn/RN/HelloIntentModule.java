package com.shibie_rn.RN;

/**
 * Created by shaoxiaoze on 2018/5/14.
 */

import android.app.Activity;
import android.content.Intent;
import android.text.TextUtils;
import android.util.Log;

import com.facebook.react.bridge.ActivityEventListener;
import com.facebook.react.bridge.BaseActivityEventListener;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * 原生Activity与React交互——模块
 */

public class HelloIntentModule extends ReactContextBaseJavaModule {

    private static final int REQUEST_OPEN_NATIVE = 1000;

    private static final String E_ACTIVITY_DOES_NOT_EXIST = "E_ACTIVITY_DOES_NOT_EXIST";
    private static final String E_PICKER_CANCELLED = "E_PICKER_CANCELLED";
    private static final String E_FAILED_TO_SHOW_PICKER = "E_FAILED_TO_SHOW_PICKER";
    private static final String E_NO_IMAGE_DATA_FOUND = "E_NO_IMAGE_DATA_FOUND";

    public HelloIntentModule(ReactApplicationContext reactContext) {
        super(reactContext);
        reactContext.addActivityEventListener(mActivityEventListener);

    }

    @Override
    public String getName() {
        return "HelloIntentModule";
    }
    //注意：记住getName方法中的命名名称，JS中调用需要

//    @ReactMethod
//    public void startActivityFromJS(String name, String params){
//        try{
//            Activity currentActivity = getCurrentActivity();
//            if(null!=currentActivity){
//                Class toActivity = Class.forName(name);
//                Intent intent = new Intent(currentActivity,toActivity);
//                intent.putExtra("params", params);
//                currentActivity.startActivityForResult(intent, REQUEST_OPEN_NATIVE);
//            }
//        }catch(Exception e){
//            throw new JSApplicationIllegalArgumentException(
//                    "不能打开Activity : "+e.getMessage());
//        }
//    }

    @ReactMethod
    public void startActivityFromJS(final String name, final String params, final Promise promise) {
        Activity currentActivity = getCurrentActivity();

        if (currentActivity == null) {
            promise.reject(E_ACTIVITY_DOES_NOT_EXIST, "Activity doesn't exist");
            return;
        }

        // Store the promise to resolve/reject when picker returns data
        mPickerPromise = promise;

        try {
            Class toActivity = Class.forName(name);
            Intent intent = new Intent(currentActivity, toActivity);
            intent.putExtra("params", params);
            currentActivity.startActivityForResult(intent, REQUEST_OPEN_NATIVE);
        } catch (Exception e) {
            mPickerPromise.reject(E_FAILED_TO_SHOW_PICKER, e);
            mPickerPromise = null;
        }
    }


    private Promise mPickerPromise;

    private final ActivityEventListener mActivityEventListener = new BaseActivityEventListener() {

        @Override
        public void onActivityResult(Activity activity, int requestCode, int resultCode, Intent intent) {
            Log.e("onActivityResult", "" + requestCode);
            if (requestCode == REQUEST_OPEN_NATIVE) {
                if (mPickerPromise != null) {
                    mPickerPromise.resolve("message");
//                    if (resultCode == Activity.RESULT_CANCELED) {
//                        mPickerPromise.reject(E_PICKER_CANCELLED, "Image picker was cancelled");
//                    } else if (resultCode == Activity.RESULT_OK) {
//                        Uri uri = intent.getData();
//
//                        if (uri == null) {
//                            mPickerPromise.reject(E_NO_IMAGE_DATA_FOUND, "No image data found");
//                        } else {
//                            mPickerPromise.resolve(uri.toString());
//                        }
//                    }
//
                    mPickerPromise = null;
                }
            }
        }
    };

    @ReactMethod
    public void dataToJS(Callback successBack, Callback errorBack) {
        try {
            Activity currentActivity = getCurrentActivity();
            String result = currentActivity.getIntent().getStringExtra("data");
            if (TextUtils.isEmpty(result)) {
                result = "没有数据";
            }
            successBack.invoke(result);
        } catch (Exception e) {
            errorBack.invoke(e.getMessage());
        }
    }
//注意：startActivityFromJS、dataToJS方法添加RN注解(@ReactMethod)，否则该方法将不被添加到RN中
}

