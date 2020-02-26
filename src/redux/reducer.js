const initialState = {
  user: {
    username: "admin",
    password: "password",
    name: "Ily",
    phone: "123-33-44"
  },
  authorisation: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOG_IN":
      return {
        ...state,
        authorisation: true
      };
    case "LOG_OUT":
      return {
        ...state,
        authorisation: false
      };
    default:
      return state;
  }
};

export default reducer;
