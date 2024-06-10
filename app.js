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
    handler(argv) {
        notes.addNote(argv.title, argv.body);
    }
});

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            //Requires this input to execute
            demandOption: true,
            //Requires this to be a string
            type: 'string'
        },
    },
    handler(argv) {
        notes.removeNote(argv.title);
    }
});

// Create list command 
yargs.command({
    command: 'list',
    describe: 'list notes',
    handler() {
        notes.listNotes();
    }
});

// Create read command
yargs.command({
    command: 'read',
    describe: 'read notes',
    builder: {
        title: {
            describe: 'Note title',
            //Requires this input to execute
            demandOption: true,
            //Requires this to be a string
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title);
    }
});

yargs.parse();
