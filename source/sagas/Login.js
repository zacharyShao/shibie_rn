/**
 * Created by shaoxiaoze on 2018/5/13.
 */
//
// import {takeEvery} from 'redux-saga'
// import {call, put} from 'redux-saga/effects'
// // import {getUserLoginAsync} from '../apis/'
// import * as ActionType from '../actions/constants'
//
//
// export default function* watchUserLogin() {
//     yield* takeEvery(ActionType.LOGIN, function* logger(action) {
//         // console.log('action', action);
//         try {
//             // const data = yield call(getUserLoginAsync, action.phone, action.password);
//             // console.log("watchLogin", data);
//             yield put({type: ActionType.LOGIN_SUCC, data});
//
//         } catch (error) {
//             console.log('error',error);
//             yield put({type: ActionType.LOGIN_FAIL, error});
//         }
//     })
// }