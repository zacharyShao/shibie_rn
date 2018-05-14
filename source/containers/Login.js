/**
 * Created by shaoxiaoze on 2018/5/10.
 */
import React, {Component, PropTypes} from 'react';
import {Button, Flex} from 'antd-mobile';
import {login} from  '../actions/actions'
import {connect} from 'react-redux'
import {NativeModules, Platform} from 'react-native'

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

    platformIOS = false;

    _onClickLogin = (e) => {
        console.log('login onClick');
        this.props.login('123', '456')
    }

    _onClickOpenAndroidCamera = (e) => {
        console.log('open android click');
        NativeModules
            .HelloIntentModule
            .startActivityFromJS("com.shibie_rn.HelloActivity", null).then(msg => {
            console.log('msg', msg)

        }).catch(error => {
            console.log(error);
        });
    }

    _onClickOpenIOSCamera = (e) => {
        console.log('open iosclick');
    }

    componentWillMount(){
        this.platformIOS = (Platform.OS == 'ios');
    }
    render() {
        return (
            <Flex>
                <Flex.Item>
                    <Button onClick={this._onClickLogin}>Login</Button>
                </Flex.Item>
                <Flex.Item>
                    <Button onClick={ this.platformIOS ? this._onClickOpenIOSCamera : this._onClickOpenAndroidCamera }>
                        Open Camera</Button>
                </Flex.Item>
            </Flex>
        );
    };


}



