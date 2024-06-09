const notes = require('./notes.js');
const yargs = require('yargs');
const chalk = require('chalk');

// Customize yargs version
yargs.version('1.1.0');

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
        //adds additional props to save such as --tite="value" to store
    builder: {
        title: {
            describe: 'Note title',
            //Requires this input to execute
            demandOption: true,
            //Requires this to be a string
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body);
    }
});

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('Removing the note');
    }
});

// Create list command 
yargs.command({
    command: 'list',
    describe: 'list notes',
    handler: function () {
        console.log('Listing the notes');
    }
});

// Create read command
yargs.command({
    command: 'read',
    describe: 'read notes',
    handler: function () {
        console.log('Reading the notes');
    }
});

yargs.parse();
