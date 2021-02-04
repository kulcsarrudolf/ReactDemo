const initState = "Kulcsar Rudolf";

const userReducer = (state = initState, action) => {
    switch (action.type) {
        case "SET_USER":
            return action.payload.user;
        case "RESET_USER":
            return initState;
        default:
            return state;
    }
};

export default userReducer;
