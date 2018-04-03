import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';

// export class Stack extends Component {
//     render() {
//         return <Account />;
//     }
// }

class SignIn extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.signInContainer}>
                <Text style={styles.titleText}>SignIn Component</Text>
                <TouchableOpacity style={styles.buttonContainer} onPress={() => navigate('Account', { name: 'Ti' })}>
                    <Text style={styles.buttonText}>Sign In Ti</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer} onPress={() => navigate('Account', { name: 'Teo' })}>
                    <Text style={styles.buttonText}>Sign In Teo</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer} onPress={() => navigate('Account', { name: 'Tun' })}>
                    <Text style={styles.buttonText}>Sign In Tun</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

class Account extends Component {
    render() {
        const { goBack, state } = this.props.navigation;
        const { name } = state.params;
        return (
            <View style={styles.accountContainer}>
                <Text style={styles.titleText}>Account Component</Text>
                <Text style={styles.titleText}>Hello {name}</Text>
                <TouchableOpacity style={styles.buttonContainer} onPress={() => goBack()}>
                    <Text style={styles.buttonText}>Sign Out</Text>
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

export const Stack = StackNavigator
(
    {
        SignIn: { screen: SignIn },
        Account: {
            screen: Account,
            path: 'account/:name'
        }
    },
    { headerMode: 'none' }
);
