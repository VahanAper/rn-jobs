import React from 'react';
import {
    View,
    Text,
} from 'react-native';

import Slides from '../components/Slides';

const SLIDE_DATA = [
    { text: 'Welcome to JobApp' },
    { text: 'Set your location, then swipe away' },
];

class WelcomeScreen extends React.Component {
    render() {
        return (
            <Slides data={SLIDE_DATA} />
        );
    }
}

export default WelcomeScreen;
