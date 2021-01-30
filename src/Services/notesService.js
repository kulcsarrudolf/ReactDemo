import notes from "../data";

export const getNotes = () => {
    return notes;
};

export const getRandomNote = () => {
    const notes = getNotes();
    const random = Math.floor(Math.random() * Math.floor(notes.length));

    return notes[random];
};

export const getNotesByUserName = (userName) => {
    if (userName === null) {
        return [];
    }

    const userNotes = getNotes().filter((note) => note.author === userName);

    return userNotes;
};
