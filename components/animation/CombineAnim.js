import React, { Component } from 'react';

import { View, Text, StyleSheet, Animated, Easing } from 'react-native';
import bellImage from '../../images/bell.png';

export class CombineAnim extends Component {
    state = {
        slide1: new Animated.Value(0),
        slide2: new Animated.Value(0)
    }
    componentDidMount() {
        const anim1 = Animated.timing(
            this.state.slide1,
            { toValue: 1, duration: 2000, easing: Easing.bounce }
        );
        const anim2 = Animated.timing(
            this.state.slide2,
            { toValue: 1, duration: 3000, easing: Easing.bounce }
        );
        Animated.parallel([anim1, anim2]).start();
    }
    render() {
        const marginLeft1 = this.state.slide1.interpolate({
            inputRange: [0, 1],
            outputRange: [-300, 0]
        });
        const marginLeft2 = this.state.slide2.interpolate({
            inputRange: [0, 1],
            outputRange: [-300, 0]
        });
        return (
            <View style={styles.container}>
                {/* <Animated.View
                    style={{
                        backgroundColor: 'green',
                        height: 150,
                        width: 200,
                        marginLeft: marginLeft1,
                    }}
                /> */}
                <View style={{ height: 10 }}></View>
                <Animated.Image source={bellImage} style={{ width: 50, height: 50 }}/>
                {/* <Animated.View
                    style={{
                        backgroundColor: 'yellow',
                        height: 150,
                        width: 200,
                        marginLeft: marginLeft2,
                    }}
                /> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightblue'
    },
    buttonContainer: {
        backgroundColor: '#117ACC',
        padding: 10,
        margin: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold'
    },
    titleText: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    }
});
