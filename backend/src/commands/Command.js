const colors = require('colors');

class Command {

    constructor(args) {
        for (let arg of args) {
            this[arg.parameter] = arg.value;
        }
    }

    success(message) {
        console.log(message.green);
    }

    info(message) {
        console.log(message.cyan);
    }

    error(message) {
        console.log(message.red);
    }

    newLine() {
        console.log();
    }
}

module.exports = Command;
