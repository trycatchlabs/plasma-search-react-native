import {
  SET_BLOOD_RECIEVER_BLOOD,
  SET_BLOOD_TYPE_BLOOD,
  SET_DATE_BLOOD,
  SET_DISTANCE_TRAVEL_BLOOD,
  SET_HOSPITAL_NAME_BLOOD,
  SET_PICKUP_SERVICE_BLOOD,
} from "./constants";

export function setBloodRecieverOrDoner(value) {
  return {
    type: SET_BLOOD_RECIEVER_BLOOD,
    value: value,
  };
}

export function setBloodType(value) {
  return {
    type: SET_BLOOD_TYPE_BLOOD,
    value: value,
  };
}

export function setRecoveryDate(value) {
  return {
    type: SET_DATE_BLOOD,
    value: value,
  };
}

export function setDistanceWillingTotravel(value) {
  return {
    type: SET_DISTANCE_TRAVEL_BLOOD,
    value: value,
  };
}

export function setHospitalName(value) {
  return {
    type: SET_HOSPITAL_NAME_BLOOD,
    value: value,
  };
}

export function setPickUpDropStatus(value) {
  return {
    type: SET_PICKUP_SERVICE_BLOOD,
    value: value,
  };
}
