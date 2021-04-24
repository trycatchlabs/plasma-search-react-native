import { LOGIN } from "../actions/constants";

let initialState = {
  mobilenumber: "",
};

export default function AuthenticationReducer(state = initialState, actions) {
  switch (actions.type) {
    case LOGIN:
      return {
        ...state,
        mobilenumber: actions.value,
      };
    default:
      return state;
  }
}
