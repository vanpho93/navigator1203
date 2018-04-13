import React, { Component } from 'react';

import { View, Text, StyleSheet, Animated, Easing } from 'react-native';

export class CombineAnim extends Component {
    state = {
        slide1: new Animated.Value(0),
        slide2: new Animated.Value(0)
    }
    componentDidMount() {
        Animated.timing(
            this.state.slide1,
            { toValue: 1, duration: 2000, easing: Easing.bounce }
        ).start();
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
                <Animated.View
                    style={{
                        backgroundColor: 'green',
                        height: 150,
                        width: 200,
                        marginLeft: marginLeft1,
                    }}
                />
                <View style={{ height: 10 }}></View>
                <Animated.View
                    style={{
                        backgroundColor: 'green',
                        height: 150,
                        width: 200,
                        marginLeft: marginLeft2,
                    }}
                />
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
