/**
 * Created by shaoxiaoze on 2018/5/13.
 */
import { LOGIN_APP } from '../actions/constants';

export const loginApp = (state = null, action) => {
    switch (action.type) {
        case LOGIN_APP:
            return Object.assign({}, state, {
                data: action.data
            })
            break;
        default:
            return state;
    }
}
