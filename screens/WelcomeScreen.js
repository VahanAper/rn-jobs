import React from 'react';
import {
    AsyncStorage,
} from 'react-native';
import {
    AppLoading,
} from 'expo';

import Slides from '../components/Slides';

const SLIDE_DATA = [
    {
        id: 1,
        color: '#03A9F4',
        text: 'Welcome to JobApp',
    },
    {
        id: 2,
        color: '#009688',
        text: 'Set your location, then swipe away',
    },
    {
        id: 3,
        color: '#03A9F4',
        text: 'Use this to get a job',
    },
];

class WelcomeScreen extends React.Component {
    state = {
        token: null,
    }
    
    async componentWillMount() {
        let token = await AsyncStorage.getItem('fb_token');
    
        if (token) {
            this.setState({ token }, () => {
                this.props.navigation.navigate('map');
            });
        } else {
            this.setState({ token: false });
        }
    }
    
    onSlideComplete = () => {
        // this.props.navigation.navigate('auth');
        
        // Passing empty params to 'auth' screen
        // for 'componentWillReceiveProps' to be called.
        // A temporary solution
        this.props.navigation.navigate({
            routeName: 'auth',
            params: {},
        });
    }
    
    render() {
        if (this.state.token === null) {
            return (
                <AppLoading />
            );
        }
        
        return (
            <Slides
                data={SLIDE_DATA}
                onComplete={this.onSlideComplete}
            />
        );
    }
}

export default WelcomeScreen;
