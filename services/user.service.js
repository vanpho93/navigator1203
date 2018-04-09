import axios from 'axios';

const URL = 'https://rnauth1203.herokuapp.com';

export async function signInApi(email, plainPassword) {
    return axios.post(`${URL}/signin`, { email, plainPassword })
    .then(response => {
        const { success, user } = response.data;
        if (!success) throw new Error('Invalid user info.');
        return user;
    });
}
