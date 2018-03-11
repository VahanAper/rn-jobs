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
            <Card title={job.jobtitle}>
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
                
                <Text>
                    {this.clearSnippetText(job.snippet)}
                </Text>
            </Card>
        );
    }
    
    renderNoMoreCards = () => {
        return (
            <Card title="No more jobs" />
        );
    }
    
    render() {
        return (
            <View>
                <Swipe
                    keyProp="jobkey"
                    data={this.props.jobs}
                    renderCard={this.renderCard}
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

export default connect(mapStateToProps)(DeckScreen);
