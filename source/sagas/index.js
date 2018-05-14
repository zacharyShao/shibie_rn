/**
 * Created by shaoxiaoze on 2018/5/13.
 */
import {  takeEvery } from 'redux-saga';
import { put , call } from 'redux-saga/effects'
import * as ActionType from '../actions/constants'
import { loginAsync } from '../apis/login'
export default function* rootSaga() {
    yield* takeEvery(ActionType.LOGIN, function* logger(action) {
        console.log('action', action);
        try {
            const data = yield call(loginAsync);
            console.log("watchLogin", data);
            yield put({type: ActionType.LOGIN_SUCC, data});

        } catch (error) {
            // console.log('error',error);
            yield put({type: ActionType.LOGIN_FAIL, error});
        }
    })
}
