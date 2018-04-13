import React, { Component } from 'react';

import { View, Text, StyleSheet, Animated, Easing } from 'react-native';

function getRandomColor() {
    const colors = ['green', 'red', 'blue', 'yellow', 'gray'];
    const color = colors[Math.floor(Math.random() * 5)];
    console.log(color);
    return color;
}

export class ResponderView extends Component {
    state = {
        locationX: new Animated.Value(0),
        locationY: new Animated.Value(0) ,
        backgroundColor: 'green'
    }
    render() {
        const { locationX, locationY } = this.state;
        return (
            <View style={styles.container}>
                <Text>X = {locationX.toString()}</Text>
                <Text>Y = {locationY.toString()}</Text>
                <Animated.View
                    style={{
                        backgroundColor: this.state.backgroundColor,
                        height: 200,
                        width: 200,
                        marginLeft:locationX,
                        marginTop: locationY
                    }}
                    onStartShouldSetResponderCapture={(evt) => true}
                    onMoveShouldSetResponderCapture={(evt) => true}
                    onResponderMove={evt => {
                        const { locationX, locationY } = evt.nativeEvent;
                        this.setState({
                            locationX: new Animated.Value(locationX),
                            locationY: new Animated.Value(locationY)
                        })
                    }}
                    onResponderRelease={() => {
                        Animated.timing(
                            this.state.locationX,
                            { toValue: 0 }
                        ).start();
                        Animated.timing(
                            this.state.locationY,
                            { toValue: 0 }
                        ).start();
                        this.setState({ backgroundColor: getRandomColor() });
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
