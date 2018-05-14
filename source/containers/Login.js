/**
 * Created by shaoxiaoze on 2018/5/10.
 */
import React,{ Component, PropTypes } from 'react';
import { Button } from 'antd-mobile';
import { login } from  '../actions/actions'
import {connect} from 'react-redux'

@connect(
    (state) => {
        return ({
            loginInfo: state.loginInfo,
        });
    },
    {login}
)
export default class Login extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };
    _onClick = (e) =>{
        console.log('login onClick');
        this.props.login('123','456')
    }
    render() {
        return (
            <Button onClick={this._onClick} >Login</Button>
        );
    };

}



