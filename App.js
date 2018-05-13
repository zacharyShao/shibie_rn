import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import http from './source/apis/http'
global.http = http

import createReducer from './source/reducers/index'

const store = createStore(createReducer)

import Login from './source/containers/Login'

export default class App extends React.Component {
  render() {
    return (
        <Provider store={store}>
            <Login />
        </Provider>
    );
  }
}


