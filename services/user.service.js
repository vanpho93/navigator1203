import { AsyncStorage } from 'react-native';
import axios from 'axios';

const URL = 'https://rnauth1203.herokuapp.com';

export async function signInApi(email, plainPassword) {
    return axios.post(`${URL}/signin`, { email, plainPassword })
    .then(response => {
        const { success, user } = response.data;
        if (!success) throw new Error('Invalid user info.');
        AsyncStorage.setItem('token', user.token);
        return user;
    });
}

export async function checkStatus() {
    return AsyncStorage.getItem('token')
    .then(token => {
        return axios.post(`${URL}/check`, {}, { headers: { token } })
        .then(response => {
            const { success, user } = response.data;
            if (!success) throw new Error('Invalid user info.');
            AsyncStorage.setItem('token', user.token);
            return user;
        });
    });
}
