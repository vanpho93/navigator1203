import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, TextInput, ActivityIndicator, Alert, AsyncStorage } from 'react-native';
import { signInApi } from '../../services/user.service';
import io from 'socket.io-client';

export class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtMessage: '',
            messages: []
        };
        this.socket = io.connect('https://chat1203.herokuapp.com/');
        this.sendMessageToServer = this.sendMessageToServer.bind(this);
    }

    componentDidMount() {
        this.socket.on('SERVER_SEND_MESSGAGE', data => {
            this.setState({ messages: [data, ...this.state.messages] });
        });
    }

    sendMessageToServer() {
        const { txtMessage } = this.state;
        this.socket.emit('CLIENT_SEND_MESSAGE', txtMessage);
        this.setState({ txtMessage: '' });
    }

    render() {
        return (
            <View style={styles.chatContainer}>
                <View style={styles.messagesContainer}>
                    <Text>Messages</Text>
                    { this.state.messages.map(message => <Text key={Math.random()}>{message}</Text>) }
                </View>
                <View style={styles.controlContainer}>
                    <TextInput
                        placeholder="Email"
                        style={styles.inputText}
                        autoCapitalize="none"
                        value={this.state.txtMessage}
                        onChangeText={text => this.setState({ txtMessage: text })}
                        underlineColorAndroid="transparent"    
                    />
                    <TouchableOpacity style={styles.buttonContainer} onPress={this.sendMessageToServer}>
                        <Text style={styles.buttonText}>Send</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    chatContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#7A609C',
    },
    controlContainer: {
        flexDirection: 'row',
        flex: 1
    },
    messagesContainer: {
        backgroundColor: 'white',
        alignSelf: 'stretch',
        padding: 10,
        marginHorizontal: 15,
        marginTop: 10,
        flex: 9,
        borderRadius: 5
    },
    buttonContainer: {
        backgroundColor: '#117ACC',
        padding: 10,
        margin: 10,
        borderRadius: 5,
        width: 70,
        height: 40,
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
        width: 250,
        height: 40,
        backgroundColor: '#EDEDED',
        borderRadius: 5,
        margin: 10,
        paddingLeft: 10
    }
});

