import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { DrawerNavigator } from 'react-navigation';

class SignIn extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.signInContainer}>
                <Text style={styles.titleText}>SignIn Component</Text>
                <TouchableOpacity style={styles.buttonContainer} onPress={() => navigate('DrawerOpen')}>
                    <Text style={styles.buttonText}>Open Menu</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Close Menu</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

class Menu extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.accountContainer}>
                <Text style={styles.titleText}>Menu Component</Text>
                <TouchableOpacity style={styles.buttonContainer} onPress={() => navigate('DrawerClose')}>
                    <Text style={styles.buttonText}>Close Menu</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    signInContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#7A609C'
    },
    accountContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#63A62A'
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

export const Drawer = DrawerNavigator
(
    {
        SignIn: { screen: SignIn },
    },
    {
        contentComponent: Menu 
    }
);
