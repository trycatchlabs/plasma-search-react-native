import { LOGIN } from "./constants";

export function LoginUser(value) {
  return {
    type: LOGIN,
    value: value,
  };
}
