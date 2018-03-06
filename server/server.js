let app = require('http').createServer();
let io = require('socket.io')(app);

app.listen(8080, () => {
    console.log("Server is listening on port 8080");
});

io.on('connection', function (socket) {

    socket.on("register", (data) => {
        socket.userName = data;
        console.log(socket.userName + " entered");
    });

    socket.on('message', (data) => {
        console.log(socket.userName + ": " + data);
        io.emit('broadcast', {
            name: socket.userName,
            message: data
        });
    })
});