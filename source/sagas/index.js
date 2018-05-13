/**
 * Created by shaoxiaoze on 2018/5/13.
 */
import {  takeEvery } from 'redux-saga';

import { LOGIN_APP } from '../actions/constants'
import { login } from './apis/index';


export default function* rootSaga() {

    yield takeEvery(LOGIN_APP, login);

}
