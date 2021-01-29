import notes from "../data";

export const getNotes = () => {
    return notes;
};

export const getRandomNote = () => {
    const notes = getNotes();
    const random = Math.floor(Math.random() * Math.floor(notes.length));

    return notes[random];
};
