const User = require('./models').User;
const UserRepository = require('./repositories/UserRepository');

const socketHandler = (socket) => {

    socket.on('synchronize', async (data) => {

        if (!data.accessToken) {
            return false;
        }

        const user = await User.findOne({where: {token: data.accessToken}});

        if (user) {
            await UserRepository.synchronizeData(user, data);
        }
    });

};

module.exports = socketHandler;
