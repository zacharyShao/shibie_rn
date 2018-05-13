/**
 * Created by shaoxiaoze on 2018/5/13.
 */
import { LOGIN_APP } from './constants';

//初始请求
export const login = (params) => {
    return {
        type: LOGIN_APP,
        params
    }
}
