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
    
    resetToken = async () => {
        let result = await AsyncStorage.removeItem('fb_token');
        
        this.props.navigation.navigate('welcome');
    }
    
    render() {
        return (
            <View>
                <Button
                    large
                    title="Reset FB token"
                    backgroundColor="#F44336"
                    onPress={this.resetToken}
                    buttonStyle={{ marginTop: 10 }}
                    icon={{ name: 'delete-forever' }}
                />
                <Button
                    large
                    title="Reset liked jobs"
                    backgroundColor="#F44336"
                    buttonStyle={{ marginTop: 10 }}
                    icon={{ name: 'delete-forever' }}
                    onPress={this.props.clearLikedJobs}
                />
            </View>
        );
    }
}

export default connect(null, { clearLikedJobs })(SettingsScreen);
