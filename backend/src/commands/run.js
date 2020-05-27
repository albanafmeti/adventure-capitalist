const fs = require('fs');
const path = require("path");
const colors = require('colors');
const commands = [];

const normalizedPath = path.join(__dirname);
fs.readdirSync(normalizedPath).forEach(function (file) {

    if (file !== "run.js" && file !== "Command.js" && file !== "stubs") {
        const command = require("./" + file);
        commands.push(command);
    }
});

const argv = process.argv.slice(2);

const commandSignature = argv[0];

// Get command parameters:
const parameters = [];
for (let argument of argv) {

    if (argument.startsWith(":")) {

        let parts = argument.split("=");
        if (parts.length !== 2) {
            throw new Error("Invalid command parameter: " + argument);
        }

        parameters.push({
            parameter: parts[0].substr(1),
            value: parts[1]
        });
    }
}

function generateEntity(type, entityName, entityPath, replaces) {

    const baseDir = path.resolve("src");

    const StubEntityPath = path.join(baseDir, `commands/stubs/Example${type}.stub`);
    const NewEntityPath = path.join(baseDir, entityPath, entityName + ".js");

    fs.copyFile(StubEntityPath, NewEntityPath, fs.constants.COPYFILE_EXCL, (err) => {
        if (err) throw err;

        fs.readFile(NewEntityPath, 'utf8', function (err, data) {
            if (err) {
                return console.log(err);
            }

            let result = data;
            for (let replace of Object.keys(replaces)) {
                result = result.replace(replaces[replace], replace);
            }

            fs.writeFile(NewEntityPath, result, 'utf8', function (err) {
                if (err) return console.log(err);

                console.log(`${type} generated successfully.`.green);
            });
        });
    });
}

if (commandSignature === "list") {

    console.log("app commands:".green.underline);
    console.log("list".cyan.padEnd(30, ' '), "\t", "List all the available commands.");
    console.log("make:command".cyan.padEnd(30, ' '), "\t", "Generate new command declaring the name via parameter :name.");
    console.log("make:controller".cyan.padEnd(30, ' '), "\t", "Generate new controller declaring the name via parameter :name.");
    console.log("make:mail".cyan.padEnd(30, ' '), "\t", "Generate new mail declaring the name via parameter :name.");

    console.log();
    console.log("your commands:".green.underline);

    for (let command of commands) {
        console.log(command.signature().cyan.padEnd(30, ' '), "\t", command.description());
    }

    return;
} else if (commandSignature.startsWith("make:")) {

    const nameParam = parameters.find(p => p.parameter === "name");

    if (!nameParam) {
        throw new Error("Parameter :name is required.");
    }

    const entityName = nameParam.value;

    if (commandSignature === "make:command") {

        generateEntity("Command", entityName, "commands", {
            [entityName]: /ExampleCommand/g
        });

    } else if (commandSignature === "make:mail") {

        generateEntity("Mail", entityName, "mails", {
            [entityName]: /ExampleMail/g
        });

    } else if (commandSignature === "make:controller") {

        generateEntity("Controller", entityName, "http/controllers", {
            [entityName]: /ExampleController/g
        });

    }
}

// Run command:
for (let command of commands) {
    if (command.signature() === commandSignature) {

        const commandObject = new command(parameters);

        commandObject.handle();
    }
}
