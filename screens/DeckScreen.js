import React from 'react';
import {
    View,
    Text,
} from 'react-native';
import {
    connect,
} from 'react-redux';
import {
    MapView,
} from 'expo';
import {
    Card,
    Button,
} from 'react-native-elements';

import Swipe from '../components/Swipe';

import {
    likeJob,
} from '../actions';

class DeckScreen extends React.Component {
    clearSnippetText = (snippet) => {
        return snippet.replace(/<b>/g, '').replace(/<\/b>/g, '');
    }
    
    renderCard = (job) => {
        const initialRegion = {
            longitude: job.longitude,
            latitude: job.latitude,
            // these props specifies zoom level
            longitudeDelta: 0.045,
            latitudeDelta: 0.02,
        };
        
        return (
            <Card
                title={job.jobtitle}
                titleNumberOfLines={1}
            >
                <View style={{ height: 200 }}>
                    <MapView
                        cacheEnabled 
                        style={{ flex: 1 }}
                        scrollEnabled={false}
                        initialRegion={initialRegion}
                    />
                </View>
                
                <View style={styles.detailWrapper}>
                    <Text>{job.company}</Text>
                    <Text>{job.formattedRelativeTime}</Text>
                </View>
                
                <Text style={{ height: 50 }}>
                    {this.clearSnippetText(job.snippet)}
                </Text>
            </Card>
        );
    }
    
    renderNoMoreCards = () => {
        return (
            <Card title="No More Jobs">
                <Button
                    large
                    title="Back To Map"
                    icon={{ name: 'my-location' }}
                    backgroundColor="#03A9F4"
                    onPress={() => this.props.navigation.navigate('map')}
                />
            </Card>
        );
    }
    
    render() {
        return (
            <View style={{ marginTop: 10 }}>
                <Swipe
                    keyProp="jobkey"
                    data={this.props.jobs}
                    renderCard={this.renderCard}
                    onSwipeRight={this.props.likeJob}
                    renderNoMoreCards={this.renderNoMoreCards}
                />
            </View>
        );
    }
}

const styles = {
    detailWrapper: {
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
};

const mapStateToProps = ({ jobs }) => ({
    jobs: jobs.results,
});

export default connect(mapStateToProps, { likeJob })(DeckScreen);
