import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
    TabNavigator,
} from 'react-navigation';

import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';

const MainNavigator = TabNavigator({
    welcome: { screen: WelcomeScreen },
    auth: { screen: AuthScreen },
});

export default class App extends React.Component {
    render() {
        return (
            <MainNavigator />
        );  
    }
}
