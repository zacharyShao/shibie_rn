/**
 * 项目部署环境与接口定义
 */
import api from './api';

const dev = {
    name: 'development',
    web: 'https://webapi-test.abcpen.com'
};

const pro = {
    name: 'production',
    web: 'https://webapi.abcpen.com'
};

const env = pro;

export default {
    env,
    api
};