import React from 'react';
import {
    View,
    Text,
    AsyncStorage,
    ActivityIndicator,
} from 'react-native';
import { connect } from 'react-redux';

import * as actions from '../actions';

class AuthScreen extends React.Component {
    componentDidMount() {
        this.props.facebookLogin();
        
        // temp method to remove stored token
        // AsyncStorage.removeItem('fb_token');
        
        // this.onAuthComplete(this.props);
    }
    
    componentWillReceiveProps(nextProps) {
        this.onAuthComplete(nextProps);
    }
    
    onAuthComplete = (props) => {
        if (props.token) {
            this.props.navigation.navigate('map');
        }
    }
    
    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" />
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
};

const mapStateToProps = ({ auth }) => {
    return {
        token: auth.token,
    };
};

export default connect(mapStateToProps, actions)(AuthScreen);
