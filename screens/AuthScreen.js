import React from 'react';
import {
    View,
    Text,
    AsyncStorage,
} from 'react-native';
import { connect } from 'react-redux';

import * as actions from '../actions';

class AuthScreen extends React.Component {
    componentDidMount() {
        this.props.facebookLogin();
        
        // temp method to remove stored token
        AsyncStorage.removeItem('fb_token');
    }
    
    render() {
        return (
            <View />
        );
    }
}

export default connect(null, actions)(AuthScreen);
