import React, { Component } from 'react';

import { View, Text, StyleSheet } from 'react-native';

export class SimpleAnim extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.buttonText}>Animation React Native</Text>
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
