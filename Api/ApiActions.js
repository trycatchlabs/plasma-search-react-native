import axios from "axios";
import { GET_USER_DETAILS_BLOOD } from "./Endpoints";

export const getUserInformation = async (mobilenumber) => {
  let value;
  try {
    value = await axios.get(GET_USER_DETAILS_BLOOD + `${mobilenumber}`, {
      headers: { accept: "application/json" },
    });
  } catch (e) {}

  return value.data;
};
