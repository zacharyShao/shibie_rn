/**
 * Created by shaoxiaoze on 2018/5/10.
 */
import React,{ Component, PropTypes } from 'react';
import { Button } from 'react-native';

export default class Login extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };
    render() {
        return (
            <Button
                title="Go to Jane's profile"
            />
        );
    }
}



