const fs = require('fs')
const chalk = require('chalk');

const addNote = (title, body) => {
    const notes = loadNotes();
    //filters notes to find duplicate notes, puts duplicate notes in an array;
    const duplicateNote = notes.find((note) => note.title === title)

    //push new note into existing notes array

    //uses dupicateNotes array length to check if there are no duplicate notes, push new note
    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })

        //run function to save notes
        saveNotes(notes);
        console.log(chalk.green.inverse('New note added'))
    } else {
        //This runs when duplicateNotes array is not 0, meaning there is a duplicate note title
        console.log(chalk.red.inverse('Note title taken!'))
    }

}

const removeNote = (title => {
    const notes = loadNotes();
    const notesKept = notes.filter((note) => note.title !== title)
    if (notesKept.length !== notes.length) {
        console.log(chalk.green.inverse('Note removed!'))
        saveNotes(notesKept);
    } else {
        console.log(chalk.red.inverse('No note found!'))
    }
})

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.green.inverse('Your Notes: '))
    notes.forEach((note) => {
        console.log(note.title)
    })
}

const readNote = (title) => {
    const notes = loadNotes();
    //Finds the desired note to be read by looking for the same title
    const desiredNote = notes.find(note => note.title === title)
    if (desiredNote) {
        console.log(chalk.green(desiredNote.title))
        console.log(desiredNote.body)
    } else {
        console.log(chalk.red('Note not found'))
        
    }
}

const saveNotes = (notes) => {
    //Conver notes object to string
    const dataJSON = JSON.stringify(notes);
    //Updates notes.json file to have the new notes
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = (title, body) => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        //readsfile as string
        const dataJSON = dataBuffer.toString();
        //return notes as object so that we can update it
        return JSON.parse(dataJSON);
    } catch (error) {
        //runs first time since file is empty or doesnt exist
        //creates empty array to push new notes into
        return [];
    }
}

//exports variables set to created functions to use in our other file
module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}

