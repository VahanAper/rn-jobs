import React from 'react';
import {
    View,
    Text,
} from 'react-native';
import { Button } from 'react-native-elements';

class ReviewScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        headerTitle: 'Review Jobs',
        headerRight: (
            <Button
                title="Settings"
                color="rgba(0, 122, 25 5, 1)"
                backgroundColor="rgba(0, 0, 0, 0)"
                onPress={() => navigation.navigate('settings')}
            />
        ),
    });
    
    render() {
        return (
            <View>
                <Text>ReviewScreen</Text>
            </View>
        );
    }
}

export default ReviewScreen;
