import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { checkStatus } from '../../services/user.service';

export class Loading extends Component {
    componentDidMount() {
        const { navigate } = this.props.navigation;
        // setTimeout(() => navigate('SignIn'), 2000);
        checkStatus()
        .then(user => navigate('Account', { email: user.email, name: user.name }))
        .catch(error => navigate('SignIn'));
    }
    render() {
        return (
            <View style={styles.loadingContainer}>
               <ActivityIndicator size="large" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#7A609C'
    }
});

