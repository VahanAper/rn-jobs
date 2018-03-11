import React from 'react';
import {
    View,
    Text,
    Linking,
    ScrollView,
} from 'react-native';
import {
    Card,
    Button,
} from 'react-native-elements';
import {
    connect,
} from 'react-redux';
import {
    MapView,
} from 'expo';

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
    
    renderLikedJobs = () => {
        return this.props.likedJobs.map((job) => {
            const initialRegion = {
                longitude: job.longitude,
                latitude: job.latitude,
                // these props specifies zoom level
                longitudeDelta: 0.045,
                latitudeDelta: 0.02,
            };
            
            return (
                <Card
                    key={job.jobkey}
                    title={job.jobtitle}
                >
                    <View style={{ height: 200 }}>
                        <View style={{ flex: 1 }}>
                            <MapView
                                cacheEnabled
                                style={{ flex: 1 }}
                                scrollEnabled={false}
                                initialRegion={initialRegion}
                            />
                        </View>
                        
                        <View style={styles.detailWrapper}>
                            <Text style={styles.italics}>{job.company}</Text>
                            <Text style={styles.italics}>{job.formattedRelativeTime}</Text>
                        </View>
                        
                        <Button
                            title="Apply now"
                            backgroundColor="#03A9F4"
                            onPress={() => Linking.openURL(job.url)}
                        />
                    </View>
                </Card>
            );
        });
    }
    
    render() {
        return (
            <ScrollView>
                {this.renderLikedJobs()}
            </ScrollView>
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
    italics: {
        fontStyle: 'italic',
    },
};

const mapStateToProps = (state) => ({
    likedJobs: state.likedJobs,
});

export default connect(mapStateToProps)(ReviewScreen);
