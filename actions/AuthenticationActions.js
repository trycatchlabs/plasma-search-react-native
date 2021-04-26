import { LOGIN, LOGOUT } from "./constants";

export function LoginUser(value) {
  return {
    type: LOGIN,
    value: value,
  };
}

export function Logout() {
  return {
    type: LOGOUT,
    value: null,
  };
}
