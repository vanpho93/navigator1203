import React, { Component } from 'react';

import { View, Text, StyleSheet, Animated } from 'react-native';

export class SimpleAnim extends Component {
    state = { fadeAnim: new Animated.Value(0) }
    componentDidMount() {
        Animated.timing(
            this.state.fadeAnim,
            { toValue: 1, duration: 2000 }
        ).start();
    }
    render() {
        const opacity = this.state.fadeAnim;
        const marginLeft = this.state.fadeAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [-300, 0]
        });
        const backgroundColor = this.state.fadeAnim.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: ['green', 'yellow', 'red']
        });
        const rotateZ = this.state.fadeAnim.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: ['-30deg', '30deg', '0deg']
        });
        return (
            <View style={styles.container}>
                <Animated.View
                    style={{
                        backgroundColor,
                        height: 150,
                        width: 200,
                        marginLeft,
                        opacity,
                        transform: [
                            { rotateZ }
                        ]
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
        backgroundColor: '#7A609C'
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
