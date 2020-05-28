const socketHandler = (socket) => {

    socket.on('synchronize', (data) => {

        console.log('data synchronized', data);

    });

};

module.exports = socketHandler;
