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

    sortNotes(userNotes);

    return userNotes;
};

export const getCategories = () => {
    let categories = notes.map((data) => data.category);
    categories = new Set(categories); // remove duplicates

    return Array.from(categories);
};

export const sortNotes = (notesList) => {

    notesList.sort(function (a, b) {
        if (a.date > b.date) return -1;
        if (a.date < b.date) return 1;
        return 0;
      });

    return notesList;
}
