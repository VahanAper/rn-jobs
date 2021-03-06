import React from 'react';
import {
    Text,
    View,
    Alert,
    StyleSheet,
} from 'react-native';
import {
    TabBarBottom,
    TabNavigator,
    StackNavigator,
} from 'react-navigation';
import { Provider } from 'react-redux';
import {
    Notifications,
} from 'expo';

import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import MapScreen from './screens/MapScreen';
import DeckScreen from './screens/DeckScreen';
import SettingsScreen from './screens/SettingsScreen';
import ReviewScreen from './screens/ReviewScreen';

import store from './store';

import registerForNotifications from './services/push_notifications';

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
            // this prop allows the Icons to be shown on android
            tabBarComponent: TabBarBottom,
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
    componentDidMount() {
        // prompt user for access to send him push notifications
        registerForNotifications();
        
        Notifications.addListener((notification) => {
            const {
                data: { text },
                origin,
            } = notification;
            
            if (origin === 'received' && text) {
                Alert.alert(
                    'New Push Notification',
                    text,
                    [ { text: 'OK' } ],
                );
            }
        });
    }

    render() {
        return (
            <Provider store={store}>
                <MainNavigator />
            </Provider>
        );  
    }
}

export default App;
