import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import defaultImage from '../../images/default.png';
import ImagePicker from 'react-native-image-picker';

const options = {
    title: 'Select Avatar',
    customButtons: [
        { name: 'fb', title: 'Choose Photo from Facebook' },
    ],
    storageOptions: {
        skipBackup: true,
        path: 'images'
    }
};

export class Camera extends Component {
    constructor(props) {
        super(props);
        this.state = { imageSource: null };
        this.showPicker = this.showPicker.bind(this);
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
            </View>
        );
    }

    showPicker() {
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);
            if (response.didCancel) {
                console.log('User cancelled image picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                const source = { uri: response.uri };

                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({
                    imageSource: source
                });
            }
        })
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
