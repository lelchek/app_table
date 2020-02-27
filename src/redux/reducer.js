const initialState = {
  user: {
    username: "admin",
    password: "password",
    name: "Ily",
    phone: "123-33-44"
  },
  authorisation: false,
  data: []
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
    case "INITIAL_DATA":
      return {
        ...state,
        data: action.payload
      };
    case "ADD_DATA_ITEM":
      return {
        ...state,
        data: [...state.data, action.payload]
      };
    case "DELETE_DATA_ITEM":
      return {
        ...state,
        data: state.data.filter(data => data.id !== action.payload)
      };
    default:
      return state;
  }
};

export default reducer;
