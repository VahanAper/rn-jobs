import React from 'react';
import {View, Text, ScrollView} from 'react-native';

import Slides from '../components/Slides';

const SLIDE_DATA = [
    {
        id: 1,
        color: '#03A9F4',
        text: 'Welcome to JobApp'
    }, {
        id: 2,
        color: '#009688',
        text: 'Set your location, then swipe away'
    }, {
        id: 3,
        color: '#03A9F4',
        text: 'Use this to get a job'
    }
];

class WelcomeScreen extends React.Component {
    render() {
        return (<Slides data={SLIDE_DATA}/>);
    }
}

export default WelcomeScreen;
