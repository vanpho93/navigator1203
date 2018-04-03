import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, RefreshControl } from 'react-native';
import axios from 'axios';

export class ListWord extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            isRefreshing: true
        };
    }

    componentDidMount() {
        this.getMoreUsers()
        .then(users => this.setState({ users, isRefreshing: false }));
    }

    getMoreUsers() {
        return axios.get('https://word1203.herokuapp.com/user')
        .then(response => response.data.users);
    }

    renderItem({ item }) {
        return (
            <View style={styles.userContainer}>
                <Image source={{ uri: item.image }} style={styles.avatar} />
                <View style={{ justifyContent: 'space-around' }}>
                    <Text>{item.name}</Text>
                    <Text>{item.email}</Text>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Show Info</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.users}
                    renderItem={this.renderItem}
                    keyExtractor={item => item._id}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.isRefreshing}
                            onRefresh={() => {
                                this.getMoreUsers()
                                .then(users => this.setState({ users: users.concat(this.state.users) }))
                            }}
                        />
                    }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EFEEF6'
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginRight: 20
    },
    userContainer: {
        flexDirection: 'row',
        padding: 10,
        borderColor: '#AA9AC0',
        borderWidth: 0.5,
        margin: 10,
        borderRadius: 5
    },
    button: {
        backgroundColor: '#7A609C',
        alignItems: 'center',
        padding: 7,
        borderRadius: 4
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold'
    }
});
