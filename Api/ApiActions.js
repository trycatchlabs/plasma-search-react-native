import axios from "axios";
import { GET_USER_DETAILS_BLOOD, SAVE_USER_DETAILS_BLOOD } from "./Endpoints";

export const getUserInformation = async (mobilenumber) => {
  let value;
  try {
    value = await axios.get(GET_USER_DETAILS_BLOOD + `${mobilenumber}`, {
      headers: { accept: "application/json" },
    });
  } catch (e) {}

  return value.data;
};

export const saveBloodInformation = async (value, number, date) => {
  let response;
  let data;
  try {
    data = await value;
    console.log(number);
    data.mobileNumber = await number;
    data.bloodReceiver = data.bloodReciever;
    data.documentURI = await data.documentUri;
    data.recoveryDate = JSON.parse(JSON.stringify(date));

    if (data.distanceWillingToTravel === undefined) {
      data.distanceWillingToTravel = 0;
    }
    if (data.latitude === undefined) {
      data.latitude = 0;
    }
    if (data.longitude === undefined) {
      data.longitude = 0;
    }

    if (data.documentURI === null) {
      data.documentURI = "";
    }
    delete data.documentUri;
    delete data.bloodReciever;
    console.log(data);

    let resp = await axios.post(SAVE_USER_DETAILS_BLOOD, data);
    console.log(resp);
  } catch (e) {
    console.log(e);
  }

  console.log(JSON.stringify(data));

  return response;
};
