import React, {Component} from 'react';
import {AsyncStorage, FlatList, Platform, StyleSheet, Text, View} from 'react-native';
import {Button} from 'antd-mobile';
import compress from 'app/lib/compress';
import { AppColors, AppSizes, AppFonts } from 'app/style';
import {Provider} from 'react-redux';
import rootReducer from 'app/store/reducer';
import {createStore} from 'redux';

const store = createStore(rootReducer);

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
    state = {
        open: true,
    };
    onOpenChange = (...args) => {
        this.setState({open: !this.state.open});
    };
    
    componentWillMount() {
        console.log(window);
        console.log(AsyncStorage)
        console.log(compress)
        console.log(compress.compress('{asdfa: 213213,"??": "adfjadfjafkd;"}'))
        console.log(AppColors)
    };
    
    render() {
        return (
            <Provider store={store}>
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit App.js
                </Text>
                <Button
                    onClick={this.onOpenChange}>好的</Button>
                <Text style={styles.instructions}>
                    {instructions}
                </Text>
                <Drawer
                    className="my-drawer"
                    style={{minHeight: 600}}
                    enableDragHandle
                    contentStyle={{color: '#A6A6A6', textAlign: 'center', paddingTop: 42}}
                    sidebar={sidebar}
                    open={this.state.open}
                    // onOpenChange={this.onOpenChange}
                >
                    <Text>Click upper-left corner</Text>
                </Drawer>
            </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    list: {
        width: '100%'
    }
});