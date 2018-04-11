const express = require('express');
const fs = require('fs');
const formidable = require('express-formidable');

var app = express();

app.use(formidable({ uploadDir: 'public' }));

app.post('/upload', (req, res) => {
    const { avatar } = req.files;
    if (!avatar) return res.send('xong');
    fs.renameSync(avatar.path, avatar.path + avatar.name);
    res.send('xong');
});

app.listen(3000, () => console.log('Server started'));
