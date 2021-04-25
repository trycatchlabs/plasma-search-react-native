import {
  SET_BLOOD_RECIEVER_BLOOD,
  SET_BLOOD_TYPE_BLOOD,
  SET_DATE_BLOOD,
  SET_DETAILS_AVAILABLE_BLOOD,
  SET_DISTANCE_TRAVEL_BLOOD,
  SET_ENTIRE_DETAILS_BLOOD,
  SET_HOSPITAL_NAME_BLOOD,
  SET_LATITUDE_AND_LONGITUDE,
  SET_MOBILE_NUMBER,
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

export function setMobileNumberBlood(value) {
  return {
    type: SET_MOBILE_NUMBER,
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

export function setDetailsAvailable(value) {
  return {
    type: SET_ENTIRE_DETAILS_BLOOD,
    value: {
      bloodReceiver: value.bloodReceiver === 1 ? true : false,
      bloodType: value.bloodType,
      detailsAvailable: value.detailsAvailable === 1 ? true : false,
      distanceWillingToTravel: value.distanceWillingToTravel,
      documentURI: value.documentURI === null ? "" : value.documentURI,
      hospitalName: value.hospitalName,
      isActive: value.isActive === 1 ? true : false,
      latitude: value.latitude,
      longitude: value.longitude,
      mobileNumber: value.mobileNumber,
      pickUpDrop: value.pickUpDrop === 1 ? true : false,
      recoveryDate: value.recoveryDate,
    },
  };
}

export function setLatitudeAndLongitude(lat, long) {
  return {
    type: SET_LATITUDE_AND_LONGITUDE,
    value: {
      lat: lat,
      long: long,
    },
  };
}

export function setDetailsAvailableBlood(value) {
  return {
    type: SET_DETAILS_AVAILABLE_BLOOD,
    value: value,
  };
}
