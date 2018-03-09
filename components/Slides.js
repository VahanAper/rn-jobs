import React from 'react';
import {
    View,
    Text,
    ScrollView,
    Dimensions,
} from 'react-native';
import {
    Button,
} from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Slides extends React.Component {
    renderLastSlide = (index) => {
        if (index === this.props.data.length -1) {
            return (
                <Button
                    raised
                    title="Onwards!"
                />
            );
        }
    }
    
    renderSlides = () => {
        return this.props.data.map((slide, index) => {
            return (
                <View
                    key={slide.id}
                    style={[
                        styles.slideStyle,
                        { backgroundColor: slide.color },
                    ]}
                >
                    <Text style={styles.textStyle}>{slide.text}</Text>
                    {this.renderLastSlide(index)}
                </View>
            );
        });
    }
    
    render() {
        return (
            <ScrollView
                horizontal
                pagingEnabled
                style={{ flex: 1 }}
            >
                {this.renderSlides()}
            </ScrollView>
        );
    }
}

const styles = {
    textStyle: {
        fontSize: 30,
        color: 'white',
    },
    slideStyle: {
        flex: 1,
        width: SCREEN_WIDTH,
        alignItems: 'center',
        justifyContent: 'center',
    },
};

export default Slides;
