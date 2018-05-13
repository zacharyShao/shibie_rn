/**
 * 所有接口请求的封装
 */
import {env, api} from '../config';
import axios from 'axios';

const Web = {
    login(options) {
        return axios(Object.assign({
            url: env.web + api.login
        }, options));
    }
};

export default Web;