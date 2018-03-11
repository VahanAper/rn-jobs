import React from 'react';
import {
    View,
    ActivityIndicator,
} from 'react-native';
import {
    Icon,
    Button,
} from 'react-native-elements';
import {
    MapView,
} from 'expo';
import {
    connect,
} from 'react-redux';

import { fetchJobs } from '../actions';

class MapScreen extends React.Component {
    static navigationOptions = () => ({
        title: 'Map',
        tabBarIcon: ({ tintColor }) => (
            <Icon
                size={30}
                color={tintColor}
                name="my-location"
            />
        ),
    });
    
    state = {
        region: {
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        },
        mapLoaded: false,
    }
    
    componentDidMount() {
        this.setState({ mapLoaded: true });
    }
    
    onRegionChangeComplete = (region) => {
        this.setState({ region });
    }
    
    searchForJobs = () => {
        this.props.fetchJobs(
            this.state.region,
            () => this.props.navigation.navigate('deck')
        );
    }
    
    render() {
        if (!this.state.mapLoaded) {
            return (
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                    }}
                >
                    <ActivityIndicator size="large" />
                </View>
            );
        }
        
        return (
            <View style={{ flex: 1 }}>
                <MapView
                    style={{ flex: 1 }}
                    region={this.state.region}
                    onRegionChangeComplete={this.onRegionChangeComplete}
                />
                
                <View style={styles.buttonContainer}>
                    <Button
                        large
                        title="Search for jobs"
                        backgroundColor="#009688"
                        icon={{ name: 'search' }}
                        onPress={this.searchForJobs}
                    />
                </View>
            </View>
        );
    }
}

const styles = {
    buttonContainer: {
        left: 0,
        right: 0,
        bottom: 20,
        position: 'absolute',
    },
};

export default connect(null, { fetchJobs })(MapScreen);
