import { AsyncStorage } from 'react-native';
import axios from 'axios';

const URL = 'https://rnauth1203.herokuapp.com';

export async function signInApi(email, plainPassword) {
    const response = await axios.post(`${URL}/signin`, { email, plainPassword });
    const { success, user } = response.data;
    if (!success) throw new Error('Invalid user info.');
    await AsyncStorage.setItem('token', user.token);
    return user;
}

export async function checkStatus() {
    const token = await AsyncStorage.getItem('token');
    if (!token) throw new Error('Cannot find token.');
    const response = await axios.post(`${URL}/check`, {}, { headers: { token } });
    const { success, user } = response.data;
    if (!success) throw new Error('Invalid user info.');
    await AsyncStorage.setItem('token', user.token);
    return user;
}

// AsyncStorage.removeItem('token');
