/**
 * Created by shaoxiaoze on 2018/5/13.
 */
import { combineReducers } from 'redux';
import {loginApp} from './loginReducer'
// import { latestNews } from './latestNewsReducer';
// import { special } from "./specialReducer";
// import { themes } from "./themesReducer";

export default createReducer = (injectedReducers) => {
    return combineReducers({
        loginApp: loginApp,
        // special: special,
        // themes: themes,
        // router: router,
        ...injectedReducers
    })
}
