const express = require('express');
const fs = require('fs');
const formidable = require('express-formidable');

const app = express();

app.use(express.static('./public'));
app.use(formidable({ uploadDir: 'public' }));

app.get('/', (req, res) => {
    const files = fs.readdirSync('public');
    const imgs = files.map(filename => `<img src="${filename}" />`);
    const html = imgs.join('<br>');
    res.send(html);
});

app.post('/upload', (req, res) => {
    const { avatar } = req.files;
    if (!avatar) return res.send('xong1');
    fs.renameSync(avatar.path, avatar.path + avatar.name);
    res.send('xong');
});

app.listen(process.env.PORT || 3000, () => console.log('Server started'));
