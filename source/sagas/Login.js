/**
 * Created by shaoxiaoze on 2018/5/13.
 */

import { put, call } from 'redux-saga/effects';
import { LOGIN_APP_FAIL,LOGIN_APP_SUCC } from '../actions/constants';
import { loginAsync } from '../apis/index';


export function* login() {
    try {
        // yield put({})
        const data = yield call(loginAsync);
        yield put({type: LOGIN_APP_SUCC, data});

    } catch (error) {
        yield put({type: LOGIN_APP_FAIL, error});
    }
}