/**
 * Created by shaoxiaoze on 2018/5/13.
 */
import { LOGIN } from './constants';

//初始请求
export const login = (params) => {
    return {
        type: LOGIN,
        params
    }
}
