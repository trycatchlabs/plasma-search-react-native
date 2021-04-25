import axios from "axios";
import {
  GET_USER_DETAILS_BLOOD,
  SAVE_USER_DETAILS_BLOOD,
  SEND_REQUEST_FOR_BLOOD,
} from "./Endpoints";

export const getUserInformation = async (mobilenumber) => {
  let value;
  try {
    value = await axios.get(GET_USER_DETAILS_BLOOD + `${mobilenumber}`, {
      headers: { accept: "application/json" },
    });
  } catch (e) {}

  return value.data;
};

export const saveBloodInformation = async (
  value,
  number,
  date,
  latitude,
  longitude
) => {
  let response;
  let data;
  try {
    data = await value;
    console.log(number);
    data.mobileNumber = await number;
    data.bloodReceiver = data.bloodReciever;
    data.documentURI = await data.documentUri;
    data.recoveryDate = JSON.parse(JSON.stringify(date));
    data.detailsAvailable = true;
    data.latitude = latitude;
    data.longitude = longitude;
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
    if (data.hospitalName === undefined) {
      data.hospitalName = "";
    }

    delete data.documentUri;
    delete data.bloodReciever;
    console.log(data);

    let resp = await axios.post(SAVE_USER_DETAILS_BLOOD, data);
  } catch (e) {
    console.log(e);
  }

  return response;
};

export const requestDonor = async (mobileNumber, message, lat, long) => {
  try {
    let requestBody = {
      mobileNumber: mobileNumber,
      bloodMessage: message,
      latitude: lat,
      longitude: long,
    };
    console.log(requestBody);
    let resp = await axios.post(SEND_REQUEST_FOR_BLOOD, requestBody);
    console.log(resp);
  } catch (e) {
    console.log(e);
  }
};
