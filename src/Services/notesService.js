export const getImages = () => {
  return [];
};

export const getRandomNote = () => {
  const notes = getNotes();
  const random = Math.floor(Math.random() * Math.floor(images.length));

  return notes[random];
};
