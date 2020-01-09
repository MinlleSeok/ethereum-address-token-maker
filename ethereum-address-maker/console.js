const EventEmitter = require('events');
const hex = require("./core/hex.js");
const view = require("./core/view.js");

const prompt = new EventEmitter();
let current = null;
let result = {};

process.stdin.resume();

process.stdin.on('data', function (data) {
    prompt.emit(current, data.toString().trim());
});

prompt.on(':new', function (name, question) {
    current = name;
    console.log(question);
    process.stdout.write('> ');
});

prompt.on(':end', function () {
    console.log(`bye`);
    process.stdin.pause();
});

prompt.emit(':new', 'name', `
=================================================================================================================

                                                Ethereum Address Maker

=================================================================================================================

Q. What's your name? (It will be used for key-store file name)

=================================================================================================================
`);

prompt.on('name', function (data) {
    result.name = data;
    prompt.emit(':new', 'do', `
=================================================================================================================

Q. What do you want to do? 

=================================================================================================================

[0] Make a new eth address  (if you already have it, it will be overwrited!)
[1] View my eth address
[2] Exit

=================================================================================================================
    `);
});

prompt.on('do', function (data) {
    result.do = Number(data.trim());
    if (result.do === 0) {
        prompt.emit(':new', 'make-password', `
        
[Make] Please write your password

`);
    }
    if (result.do === 1) {
        prompt.emit(':new', 'view-password', `
        
[View] Please write your password

`);
    }

    if (result.do === 2) {
        prompt.emit(':end');
    }
});

prompt.on('make-password', function (data) {
    result.password = data;
    prompt.emit(':new', 'make-second_password', `
    
[Make] Please write your second password

`);
});

prompt.on('make-second_password', function (data) {
    result.second_password = data;
    const { name, password, second_password } = result;
    hex(name, password, second_password);
    prompt.emit('name');
});

prompt.on('view-password', function (data) {
    result.view_password = data;
    prompt.emit(':new', 'view-second_password', `
    
[View] Please write your second password

`);
});

prompt.on('view-second_password', function (data) {
    result.view_second_password = data;
    const { name, view_password, view_second_password } = result;
    try {
        view(name, view_password, view_second_password);
    } catch (err) {
        console.log(`
        
[Error] You don't have eth address!
        
        `);
    }
    prompt.emit('name');
});