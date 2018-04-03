import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { TabNavigator } from 'react-navigation';
import signin from '../images/signin.png';
import account from '../images/account.png';
import menu from '../images/menu.png';
import contact from '../images/contact.png';

class SignIn extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.signInContainer}>
                <Text style={styles.titleText}>SignIn Component</Text>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Open Menu</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Close Menu</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

class Account extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.accountContainer}>
                <Text style={styles.titleText}>SignIn Component</Text>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Open Menu</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Close Menu</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

class Contact extends Component {
    render() {
        return (
            <View style={styles.contactContainer}>
                <Text style={styles.titleText}>SignIn Component</Text>
                <TouchableOpacity style={styles.buttonContainer}>
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
            <View style={styles.menuContainer}>
                <Text style={styles.titleText}>Menu Component</Text>
                <TouchableOpacity style={styles.buttonContainer}>
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
    contactContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#919394'
    },
    menuContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4784F3'
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

const tabBarOption = {
    navigationOptions: ({ navigation }) => ({
        tabBarIcon: () => {
            const { routeName } = navigation.state;
            if (routeName === 'SignIn') return <Image source={signin} />
            if (routeName === 'Account') return <Image source={account} />
            if (routeName === 'Menu') return <Image source={menu} />
            return <Image source={contact} />
        }
    })
}

export const Tab = TabNavigator
(
    {
        SignIn: { screen: SignIn, tabBarIcon: signin },
        Account: { screen: Account },
        Contact: { screen: Contact },
        Menu: { screen: Menu },
    },
    tabBarOption
);
