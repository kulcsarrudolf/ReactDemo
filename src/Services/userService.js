import notes from "../data";

export const getAllUsers = () => {
    const users = notes.map((data) => data.author);
    const uniqueUsers = new Set(users);

    return Array.from(uniqueUsers);
};
