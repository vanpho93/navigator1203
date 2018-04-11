import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export class Camera extends Component {
    render() {
        return (
            <View style={styles.cameraContainer}>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Get Image</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    cameraContainer: {
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
