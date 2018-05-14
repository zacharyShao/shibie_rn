/**
 * Created by shaoxiaoze on 2018/5/10.
 */
import React, {Component, PropTypes} from 'react';
import {Button, Flex} from 'antd-mobile';
import {login} from  '../actions/actions'
import {connect} from 'react-redux'
import {NativeModules, DeviceEventEmitter} from 'react-native'

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
    _onClickLogin = (e) => {
        console.log('login onClick');
        this.props.login('123', '456')
    }


    _onClickOpenNative = (e) => {
        console.log('open native click');
        NativeModules
            .HelloIntentModule
            .startActivityFromJS("com.shibie_rn.HelloActivity", null).then(msg => {
            console.log('msg', msg)
            // console.log("年龄:" + msg.age + "/n" + "时间:" + msg.time);
            // ToastAndroid.show("Promise收到消息:" + "\n" + "年龄:" + msg.age + "时间:" + msg.time, ToastAndroid.SHORT)

            // this.setState({
            //     age: msg.age,
            //     time: msg.time,
            // })
        }).catch(error => {
            console.log(error);
        });

    }


    _backToRN = (e) => {
        console.log(' back To RN')
    }

    render() {
        return (
            <Flex>
                <Flex.Item>
                    <Button onClick={this._onClickLogin}>Login</Button>
                </Flex.Item>
                <Flex.Item>
                    <Button onClick={this._onClickOpenNative}>Open native</Button>
                </Flex.Item>
            </Flex>
        );
    };


}



