import React from 'react';
import {
    View,
    Text,
    AsyncStorage,
} from 'react-native';
import {
    Icon,
    Button,
} from 'react-native-elements';
import {
    connect,
} from 'react-redux';

import { clearLikedJobs } from '../actions';

class SettingsScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Review',
        headerTitle: '',
        tabBarIcon: ({ tintColor }) => (
            <Icon
                size={30}
                name="favorite"
                color={tintColor}
            />
        )
    });
    
    resetFacebookToken = async () => {
        let result = await AsyncStorage.removeItem('fb_token');
        
        this.props.navigation.navigate('welcome');
    }
    
    resetPushToken = async () => {
        let result = await AsyncStorage.removeItem('push_token');
    }
    
    render() {
        return (
            <View>
                <Button
                    large
                    title="Reset FB Token"
                    backgroundColor="#F44336"
                    buttonStyle={{ marginTop: 10 }}
                    icon={{ name: 'delete-forever' }}
                    onPress={this.resetFacebookToken}
                />
                <Button
                    large
                    title="Reset Liked Jobs"
                    backgroundColor="#F44336"
                    buttonStyle={{ marginTop: 10 }}
                    icon={{ name: 'delete-forever' }}
                    onPress={this.props.clearLikedJobs}
                />
                <Button
                    large
                    title="Reset Push Token"
                    backgroundColor="#F44336"
                    onPress={this.resetPushToken}
                    buttonStyle={{ marginTop: 10 }}
                    icon={{ name: 'delete-forever' }}
                />
            </View>
        );
    }
}

export default connect(null, { clearLikedJobs })(SettingsScreen);
