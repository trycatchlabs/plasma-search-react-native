import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
import {
  GET_DONATION_REQUEST_BLOOD,
  GET_USER_DETAILS_BLOOD,
  PAIR_FORMATION_API_BLOOD,
  SAVE_USER_DETAILS_BLOOD,
  SEND_REQUEST_FOR_BLOOD,
  GET_RECIEVE_REQUEST_BLOOD,
  REGISTER_USER,
  LOGIN_USER,
  PROFILE_INFORMATION,
  FORGOT_PASSWORD,
} from "./Endpoints";
import { LoginUser } from "../actions/AuthenticationActions";

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
  console.log(value, number, date, latitude, longitude);
  let response;
  let data;
  try {
    if (latitude === null || longitude === null) {
      return false;
    }
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

    response = await axios.post(SAVE_USER_DETAILS_BLOOD, data);
  } catch (e) {
    console.log(e);
  }

  if (response === undefined) {
    return false;
  }

  return true;
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

export const showMatchDetailsToDonate = async (mobileNumber) => {
  try {
    let resp = await axios.get(`${GET_DONATION_REQUEST_BLOOD}${mobileNumber}`);
    return resp.data;
  } catch (e) {
    console.log(e);
  }
};

export const performPairMatching = async (donor, receiver) => {
  try {
    let resp = await axios.post(
      `${PAIR_FORMATION_API_BLOOD}${donor}/${receiver}`
    );
    return resp.data;
  } catch (e) {
    console.log(e);
  }
};

export const findDonorAcceptedData = async (mobileNumber) => {
  let value;
  try {
    value = await axios.get(`${GET_RECIEVE_REQUEST_BLOOD}${mobileNumber}`);
  } catch (e) {}
  return value.data;
};

//////// authentication actions
export function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

export const userValidations = async (registerationsData) => {
  let resp;
  let value = false;
  registerationsData.age = parseInt(registerationsData.age);
  registerationsData.gender = registerationsData.gender === 0 ? false : true;

  if (!validateEmail(registerationsData.email)) {
    Alert.alert("Please enter valid email address");
  } else if (registerationsData.mobileNumber.length !== 10) {
    Alert.alert("Incorrect Mobile number");
  } else if (registerationsData.password.length < 8) {
    Alert.alert("please enter minimum 8 characters as password");
  } else {
    return true;
  }
};

export const userRegisterations = async (registerationsData) => {
  let resp;
  let value = false;
  registerationsData.age = parseInt(registerationsData.age);
  registerationsData.gender = registerationsData.gender === 0 ? false : true;

  if (!validateEmail(registerationsData.email)) {
    Alert.alert("Please enter valid email address");
  } else if (registerationsData.mobileNumber.length !== 10) {
    Alert.alert("Incorrect Mobile number");
  } else {
    try {
      resp = await axios.post(REGISTER_USER, registerationsData).then((res) => {
        return res.data;
      });
    } catch (e) {}
  }
  console.log(resp);

  if (resp.status === "400") {
    Alert.alert("User seems to be already registered please login");
    return false;
  } else if (resp.message === "OK") {
    try {
      await AsyncStorage.setItem(
        "mobileNumber",
        registerationsData.mobileNumber
      );

      return true;
    } catch (e) {}
  }
};

export const userLogout = async (mobileNumber) => {
  try {
    await AsyncStorage.removeItem("mobileNumber");

    return true;
  } catch (e) {}
};

export const authenticatUser = async (detals) => {
  var axios = require("axios");
  var qs = require("qs");
  var data = qs.stringify({
    username: detals.username,
    password: detals.password,
  });
  var config = {
    method: "post",
    url: LOGIN_USER,
    headers: {
      accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: data,
  };

  let resp = await axios(config)
    .then(function (response) {
      LoginUser(detals.username);
      AsyncStorage.setItem("mobileNumber", detals.username);
      console.log("loggedin");
      return true;
    })
    .catch(function (error) {
      return false;
    });

  return resp;
};

export const forgotAuthSuccess = async (details) => {
  console.log(details);

  try {
    let resp = await axios.post(FORGOT_PASSWORD, details).then((data) => {
      return data.data;
    });
    Alert.alert("Info", resp.message);
    return true;
  } catch (e) {}
};

export const userProfileInformation = async (mobilenumber) => {
  let response;
  try {
    response = await axios.get(`${PROFILE_INFORMATION}${mobilenumber}`);
  } catch (e) {}

  return response.data;
};
