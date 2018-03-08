import React from 'react';
import {
    View,
    Text,
} from 'react-native';

class ReviewScreen extends React.Component {
    static navigationOptions = {
        title: 'Review Jobs',
        headerRight: (
            <Text>Go right</Text>
        ),
    }
    
    render() {
        return (
            <View>
                <Text>ReviewScreen</Text>
            </View>
        );
    }
}

export default ReviewScreen;
