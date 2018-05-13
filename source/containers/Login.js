/**
 * Created by shaoxiaoze on 2018/5/10.
 */
import React,{ Component, PropTypes } from 'react';
import { Button } from 'react-native';
import { login } from  '../actions/actions'
import {connect} from 'react-redux'

@connect(
    (state) => {
        return ({
            ...state.loginState
        });
    },
    {login}
)
export default class Login extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };
    render() {
        return (
            <Button
                title="Go to Jane's profile"
                onPress={this._onPress}
            />
        );
    };
    _onPress = () =>{
        console.log('login onPress');
        this.props.login('123','456')
    }
}



