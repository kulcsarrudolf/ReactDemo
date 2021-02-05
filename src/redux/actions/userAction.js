export const setUser = (user) => (dispatch) => {
  dispatch({
    type: "SET_USER",
    payload: {
      user: user,
    },
  });
};

export const resetUser = () => (dispatch) => {
  dispatch({
    type: "RESET_USER",
    payload: {
      user: null,
    },
  });
};
