import React from 'react';
import {
    View,
    ActivityIndicator,
} from 'react-native';
import {
    MapView,
} from 'expo';

class MapScreen extends React.Component {
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
            </View>
        );
    }
}

export default MapScreen;
