const express = require('express')();
const server = require('http').createServer(express);
const cors = require('cors');
const io = require('socket.io')(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});

// const corsOptions = {
//     origin: "http://localhost:3000" 
// };

const STATIC_CHANNELS = [{
    name: 'Global chat',
    participants: 0,
    id: 1,
    sockets: []
}, {
    name: 'contact1 chat',
    participants: 0,
    id: 2,
    sockets: []
}];


express.use(cors());

express.get('/', (req, res) => {
    res.json({message: "Welcome to TALK BACK application!!"})
})

server.listen(8080, function () {
    console.log('listening to port 8080');
});

io.on('connection', (socket) => {
    console.log('new client connected');
    socket.emit('connection', null);
    socket.on('channel-join', id => {
        console.log('channel-join', id);
        STATIC_CHANNELS.forEach(c => {
            if(c.id === id) {
                if(c.sockets.indexOf(socket.id) == (-1)) {
                    c.sockets.push(socket.id);
                    c.participants++;
                    io.emit('channel', c);
                }
            } else {
                let index = c.sockets.indexOf(socket.id);
                if(index != (-1)){
                    c.sockets.splice(index, 1);
                    c.participants--;
                    io.emit('channel', c);
                }
            }
        });

        return id;
    });
    socket.on('send-message', message => {
        io.emit('message', message);
    });

    socket.on('disconnect', () =>{
        STATIC_CHANNELS.forEach(c => {
            let index = c.sockets.indexOf(socket.id);
            if(index != (-1)) {
                c.sockets.splice(index, 1);
                c.participants--;
                io.emit('channel', c);
            }
        });
    });
});


express.get('/getChannels', (req, res) => {
    res.json({
        channels: STATIC_CHANNELS
    })
});

