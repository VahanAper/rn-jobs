import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
    TabNavigator,
    StackNavigator,
} from 'react-navigation';
import { Provider } from 'react-redux';

import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import MapScreen from './screens/MapScreen';
import DeckScreen from './screens/DeckScreen';
import SettingsScreen from './screens/SettingsScreen';
import ReviewScreen from './screens/ReviewScreen';

import store from './store';

const MainNavigator = TabNavigator({
    welcome: { screen: WelcomeScreen },
    auth: { screen: AuthScreen },
    main: {
        screen: TabNavigator({
            map: { screen: MapScreen },
            deck: { screen: DeckScreen },
            review : {
                screen: StackNavigator({
                    review: { screen: ReviewScreen }, 
                    settings: { screen: SettingsScreen },
                }),
            },
        }, {
            // this option will prevent to render all screens at the same time
            lazy: true,
            // this option prevents navigation swiping on Android
            swipeEnabled: false,
            tabBarPosition: 'bottom',
            tabBarOptions: {
                labelStyle: {
                    fontSize: 12,
                },
            },
        }),
    },
}, {
    // this option will prevent to render all screens at the same time
    lazy: true,
    tabBarPosition: 'bottom',
    navigationOptions: {
        tabBarVisible: false,
    },
});

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <MainNavigator />
            </Provider>
        );  
    }
}

export default App;
