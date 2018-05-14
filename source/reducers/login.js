/**
 * Created by shaoxiaoze on 2018/5/13.
 */
import * as ActionType from '../actions/constants'

const initialState = {
    loginInfo : {
        loginState: false,
        loginText: '',
        jumpMainPage: false
    }
}
export const login = (state = initialState, action = {}) => {
    switch (action.type) {
        case ActionType.LOGIN:
            // return { ...state, ...{jumpMainPage: true} };
        case ActionType.LOGIN_FAIL:
            // return { ...state, ...{loginState: true, loginText: ''} };
        case ActionType.LOGIN_SUCC:
            // return { ...state, ...{loginState: false, loginText: ''} };
        default:
            return {...state}
            break;
    }
};
