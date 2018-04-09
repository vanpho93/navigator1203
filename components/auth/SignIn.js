import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, TextInput, ActivityIndicator, Alert, AsyncStorage } from 'react-native';
import { signInApi } from '../../services/user.service';

export class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            txtEmail: '',
            txtPassword: '',
        };
        this.signIn = this.signIn.bind(this);
    }

    signIn() {
        const { navigate } = this.props.navigation;
        const { txtEmail, txtPassword } = this.state;
        this.setState({ loading: true });
        signInApi(txtEmail, txtPassword)
        .then(user => navigate('Account', { email: user.email, name: user.name }))
        .catch(error => {
            Alert.alert('Sign In Error', error.message);
        })
        .then(() => this.setState({ loading: false }));
    }
    
    render() {
        return (
            <View style={styles.signInContainer}>
                <Text style={styles.titleText}>Sign In Component</Text>
                <TextInput
                    placeholder="Email"
                    style={styles.inputText}
                    autoCapitalize="none"
                    onChangeText={text => this.setState({ txtEmail: text })}
                    underlineColorAndroid="transparent"    
                />
                <TextInput
                    placeholder="Password"
                    style={styles.inputText}
                    secureTextEntry
                    autoCapitalize="none"
                    onChangeText={text => this.setState({ txtPassword: text })}
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

