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

export function openPicker (cb) {
    ImagePicker.showImagePicker(options, (response) => {
        console.log('Response = ', response);
        if (response.didCancel) return console.log('User cancelled image picker');
        if (response.error) return console.log('ImagePicker Error: ', response.error);
        if (response.customButton) {
            return console.log('User tapped custom button: ', response.customButton);
        }
        const source = { uri: response.uri };
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
        cb(source, response.data);
    });
}
