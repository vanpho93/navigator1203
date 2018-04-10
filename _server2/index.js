const io = require('socket.io')(process.env.PORT || 3000);

const users = [];

io.on('connection', socket => {
    socket.on('CLIENT_SIGN_UP', (username, fn) => {
        const isExisted = users.indexOf(username) !== -1;
        if (isExisted) return fn(false);
        users.push(username);
        socket.username = username;
        io.emit('CLIENT_JOIN', username);
        fn(users);
    });

    socket.on('CLIENT_SEND_MESSAGE', data => {
        io.emit('SERVER_SEND_MESSGAGE', `${socket.username}: ${data}`);
    });

    socket.on('disconnect', () => {
        if (!socket.username) return;
        const index = users.indexOf(socket.username);
        users.splice(index, 1);
        io.emit('CLIENT_LEAVE', socket.username);
    });
});
