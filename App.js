import React from 'react';
import createLogger from 'redux-logger';
import saga from 'redux-saga';
import sagaRoot from './source/sagas/index'
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import Login from "./source/containers/Login";
const middlewares = [];
// 创建reducer
import reducers from './source/reducers/index'
// 创建中间件saga
const sagaMiddleware = saga();
middlewares.push(sagaMiddleware)
if (process.env.NODE_ENV === 'development') {
    //创建中间件logger
    const logger = createLogger();
    middlewares.push(logger);
}
//applymiddleware配置中间件
const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

function createDefaultStore(initialsState) {
    //通过reducer 获取stare
    const defaultStore = createStoreWithMiddleware(reducers, initialsState);
    return defaultStore;
}
const store = createDefaultStore();
sagaMiddleware.run(sagaRoot)
const Root = () => (
    <Provider store={store}>
        <Login />
    </Provider>
);
export default Root;


