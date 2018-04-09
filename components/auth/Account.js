import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, TextInput } from 'react-native';

export class Account extends Component {
    constructor(props) {
        super(props);
        this.signOut = this.signOut.bind(this);
    }
    signOut() {
        const { navigate } = this.props.navigation;
        navigate('SignIn');
    }
    render() {
        const { name, email } = this.props.navigation.state.params;
        return (
            <View style={styles.accountContainer}>
                <Text style={styles.titleText}>Account Component</Text>
                <Text style={styles.titleText}>Name: {name}</Text>
                <Text style={styles.titleText}>Email: {email}</Text>
                <TouchableOpacity style={styles.buttonContainer} onPress={this.signOut}>
                    <Text style={styles.buttonText}>Sign out</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
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
        width: 300,
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold'
    },
    titleText: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    },
    inputText: {
        width: 300,
        height: 40,
        backgroundColor: '#EDEDED',
        borderRadius: 5,
        margin: 10
    }
});

