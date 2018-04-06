import axios from 'axios';

const URL = 'https://rnauth1203.herokuapp.com';

export async function signIn(email, plainPassword) {
    return axios.post(`${URL}/signin`, { email, plainPassword })
    .then(response => {
        console.log(response.data);
    });
}
