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
        return (
            <View style={styles.container}>
                <Animated.View
                    style={{
                        backgroundColor: 'lightblue',
                        height: 150,
                        width: 200,
                        opacity
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
