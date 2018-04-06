import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

export class Loading extends Component {
    componentDidMount() {
        const { navigate } = this.props.navigation;
        setTimeout(() => navigate('SignIn'), 2000);
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
        backgroundColor: '#A60000'
    }
});

