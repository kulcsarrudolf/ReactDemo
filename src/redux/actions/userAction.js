export const setUser = (user) => (dispatch) => {
  dispatch({
    type: 'SET_USER',
    payload: {
      user,
    },
  });
};

export const resetUser = () => (dispatch) => {
  dispatch({
    type: 'RESET_USER',
    payload: {
      user: null,
    },
  });
};
