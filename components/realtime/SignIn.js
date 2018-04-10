import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, TextInput, ActivityIndicator, Alert, AsyncStorage } from 'react-native';
import { signInApi } from '../../services/user.service';
import { socket } from './Stack';

export class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = { txtUsername: '' };
        this.signIn = this.signIn.bind(this);
    }

    signIn() {
        const { navigate } = this.props.navigation;
        const { txtUsername } = this.state;
        socket.emit('CLIENT_SIGN_UP', txtUsername, users => {
            if (!users) return Alert.alert('Sign In', 'Username da ton tai.');
            navigate('Chat', { users });
        }); 
    }
    
    render() {
        return (
            <View style={styles.signInContainer}>
                <Text style={styles.titleText}>Sign In Component</Text>
                <TextInput
                    placeholder="Email"
                    style={styles.inputText}
                    autoCapitalize="none"
                    onChangeText={text => this.setState({ txtUsername: text })}
                    underlineColorAndroid="transparent"    
                />
                <TouchableOpacity style={styles.buttonContainer} onPress={this.signIn}>
                    { this.state.loading ? <ActivityIndicator /> : null }
                    <Text style={styles.buttonText}>Sign In</Text>
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
        backgroundColor: '#7A609C',
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
        width: 300,
        justifyContent: 'center',
        flexDirection: 'row'
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
        margin: 10,
        paddingLeft: 10
    }
});

