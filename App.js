import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
    TabNavigator,
} from 'react-navigation';

import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import MapScreen from './screens/MapScreen';
import DeckScreen from './screens/DeckScreen';

const MainNavigator = TabNavigator({
    welcome: { screen: WelcomeScreen },
    auth: { screen: AuthScreen },
    main: {
        screen: TabNavigator({
            map: { screen: MapScreen },
            deck: { screen: DeckScreen },
        }),
    }
});

class App extends React.Component {
    render() {
        return (
            <MainNavigator />
        );  
    }
}

export default App;
