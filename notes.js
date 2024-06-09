const fs = require('fs')

const getNotes = () =>  "Your Notes...";

const addNote = (title, body) => {
    const notes = loadNotes();
    //push new note into existing notes array
    notes.push({
        title: title,
        body: body
    })

    //run function to save notes
    saveNotes(notes);
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
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

module.exports = {
    getNotes: getNotes,
    addNote: addNote
}

