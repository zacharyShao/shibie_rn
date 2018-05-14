/**
 * Created by shaoxiaoze on 2018/5/10.
 */
import React, {Component, PropTypes} from 'react';
import {Button, Flex} from 'antd-mobile';
import {login} from  '../actions/actions'
import {connect} from 'react-redux'
import {View ,InteractionManager, NativeModules, Platform} from 'react-native'


var Push = NativeModules.PushNative;

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
        InteractionManager.runAfterInteractions(() => {
            Push.RNOpenOneVC('测试');
        });
    }

    componentWillMount() {
        this.platformIOS = (Platform.OS == 'ios');
    }

    render() {
        return (
            <View style={{
                flex: 1, justifyContent: 'center',
                alignItems: 'center', backgroundColor: 'white'
            }}>
                <Flex >
                    <Flex.Item>
                        <Button onClick={this._onClickLogin}>Login</Button>
                    </Flex.Item>
                    <Flex.Item>
                        <Button
                            onClick={ this.platformIOS ? this._onClickOpenIOSCamera : this._onClickOpenAndroidCamera }>
                            Open Camera</Button>
                    </Flex.Item>
                </Flex>
            </View>

        );
    };


}



