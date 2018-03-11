import React from 'react';
import {
    View,
    Text,
    Platform,
} from 'react-native';
import { Button } from 'react-native-elements';
import {
    connect,
} from 'react-redux';

class ReviewScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        headerTitle: 'Review Jobs',
        headerRight: (
            <Button
                title="Settings"
                textStyle={{
                    color: "rgba(0, 122, 255, 1)"
                }}
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

const mapStateToProps = (state) => ({
    return {
        likedJobs: state.likedJobs,
    };
});

export default connect(mapStateToProps)(ReviewScreen);
