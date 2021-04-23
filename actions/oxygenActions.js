import {
  SET_CAN_DELIVER_OXYGEN,
  SET_DETAILS_AVAILABLE_OXYGEN,
  SET_FULL_GEAR_STATUS_OXYGEN,
  SET_HOSPITAL_NAME_ADDRESS_OXYGEN,
  SET_OXYGEN_RECIEVER_OXYGEN,
} from "./constants";

export function setOxygenReciever(value) {
  return {
    type: SET_OXYGEN_RECIEVER_OXYGEN,
    value: value,
  };
}

export function setHospitalAddressOxygen(value) {
  return {
    type: SET_HOSPITAL_NAME_ADDRESS_OXYGEN,
    value: value,
  };
}

export function setGearStatus(value) {
  return {
    type: SET_FULL_GEAR_STATUS_OXYGEN,
    value: value,
  };
}

export function setCanDeliverGear(value) {
  return {
    type: SET_CAN_DELIVER_OXYGEN,
    value: value,
  };
}

export function setDetailsAvailableOxygen(value) {
  return {
    type: SET_DETAILS_AVAILABLE_OXYGEN,
    value: value,
  };
}
