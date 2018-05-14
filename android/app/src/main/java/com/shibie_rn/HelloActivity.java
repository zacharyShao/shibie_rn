package com.shibie_rn;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;

import com.facebook.react.ReactActivity;

/**
 * Created by shaoxiaoze on 2018/5/14.
 */

public class HelloActivity extends ReactActivity {

    Button backToRN;
    public static final String TAG = "HelloActivity";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.ac_hello);
        backToRN = (Button) findViewById(R.id.backToRN);
        backToRN.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                finish();
            }
        });
    }
//
//    //
//    public void backToRN() {
//        Log.e(TAG, "backToRN");
//        WritableMap params = Arguments.createMap();
//        sendEvent(MainApplication.getReactApplicationContext(), "backToRN", params);
//    }

//    private void sendEvent(ReactContext reactContext, String eventName, @Nullable WritableMap params) {
//        reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
//                .emit(eventName, params);
//    }
}
