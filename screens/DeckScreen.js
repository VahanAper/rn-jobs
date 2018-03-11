import React from 'react';
import {
    View,
    Text,
} from 'react-native';
import {
    connect,
} from 'react-redux';

class DeckScreen extends React.Component {
    render() {
        return (
            <View>
                <Text>DeckScreen</Text>
            </View>
        );
    }
}

const mapStateToProps = ({ jobs }) => ({
    jobs: jobs.results,
});

export default connect(mapStateToProps)(DeckScreen);
