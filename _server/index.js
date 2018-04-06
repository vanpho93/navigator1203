const express = require('express');
const { json } = require('body-parser');
const { User } = require('./User');
const app = express();

app.use(json());

app.get('/', (req, res) => res.send('Server is running.'));

app.post('/signup', (req, res) => {
    const { name, email, plainPassword } = req.body;
    User.signUp(email, plainPassword, name)
    .then(user => res.send({ success: true, user }))
    .catch(error => res.send({ success: false, error: error.message }));
});

app.post('/signin', (req, res) => {
    const { email, plainPassword } = req.body;
    User.signIn(email, plainPassword)
    .then(user => res.send({ success: true, user }))
    .catch(error => res.send({ success: false, error: error.message }));
});

app.post('/check', (req, res) => {
    const { token } = req.headers;
    User.check(token)
    .then(user => res.send({ success: true, user }))
    .catch(error => res.send({ success: false, error: error.message }));
});

app.listen(process.env.PORT || 3000, () => console.log('Server started.'));
