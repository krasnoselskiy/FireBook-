const initialState = {
  authError: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCES":
      return {
        ...state,
        authError: null
      };
    case "LOGIN_ERROR":
      return {
        ...state,
        authError: "Login failed"
      };
    case "SIGNUP_SUCCES":
      return {
        ...state,
        authError: null
      };
    case "SIGNUP_ERROR":
      return {
        ...state,
        authError: action.err.message
      };
    default:
      return state;
  }
};

export default authReducer;
