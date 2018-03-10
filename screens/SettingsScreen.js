import React from 'react';
import {
    View,
    Text,
    AsyncStorage,
} from 'react-native';
import {
    Button,
} from 'react-native-elements';

class SettingsScreen extends React.Component {
    resetToken = async () => {
        let result = await AsyncStorage.removeItem('fb_token');
        
        this.props.navigation.navigate('welcome');
    }
    
    render() {
        return (
            <View>
                <Text>SettingsScreen</Text>
                <Button
                    title="Reset FB token"
                    onPress={this.resetToken}
                />
            </View>
        );
    }
}

export default SettingsScreen;
