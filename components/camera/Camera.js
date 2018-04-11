import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import RNFetchBlob from 'react-native-fetch-blob';

import defaultImage from '../../images/default.png';
import { openPicker } from './api/openPicker';

export class Camera extends Component {
    constructor(props) {
        super(props);
        this.state = { imageSource: null };
        this.showPicker = this.showPicker.bind(this);
        this.uploadImage = this.uploadImage.bind(this);
    }
    render() {
        const { imageSource } = this.state;
        return (
            <View style={styles.cameraContainer}>
                <Image
                    source={imageSource ? imageSource : defaultImage}
                    style={{ width: 200, height: 200 }}
                />
                <TouchableOpacity style={styles.buttonContainer} onPress={this.showPicker}>
                    <Text style={styles.buttonText}>Get Image</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer} onPress={this.uploadImage}>
                    <Text style={styles.buttonText}>Upload to server</Text>
                </TouchableOpacity>
            </View>
        );
    }

    showPicker() {
        openPicker(source => this.setState({ imageSource: source }));
    }

    uploadImage() {
        const options = {
            Authorization: "Bearer access-token",
            otherHeader: "foo",
            'Content-Type': 'multipart/form-data',
        };
        const URL = 'http://www.example.com/upload-form';
        const data = [{ name: 'name', data: 'user' }];
        RNFetchBlob.fetch('POST', URL, options, data)
        .then(response => alert(JSON.stringify(response)))
        .catch(error => alert('Error'));
    }
}

const styles = StyleSheet.create({
    cameraContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#7A609C'
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
