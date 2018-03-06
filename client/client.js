let socket = require('socket.io-client')('http://localhost:8080');
let myName = '';

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

socket.on('connect', function() {
    rl.question('What is your name? ', (answer) => {
        myName = answer;
        socket.emit('register', answer);
    });

    rl.on('line', (input) => {
        socket.emit('message', input);
    });
});
