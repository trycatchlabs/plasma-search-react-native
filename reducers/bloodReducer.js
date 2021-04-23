import {
  SET_BLOOD_RECIEVER_BLOOD,
  SET_BLOOD_TYPE_BLOOD,
  SET_DATE_BLOOD,
  SET_DETAILS_AVAILABLE_BLOOD,
  SET_DISTANCE_TRAVEL_BLOOD,
  SET_HOSPITAL_NAME_BLOOD,
  SET_PICKUP_SERVICE_BLOOD,
} from "../actions/constants";

let initialState = {
  bloodReciever: true,
  bloodType: null,
  hospitalName: null,
  pickUpDrop: false,
  documentUri: null,
  recoveryDate: null,
  distanceWillingToTravel: null,
  detailsAvailable: false,
};

export default function bloodReducer(state = initialState, action) {
  switch (action.type) {
    case SET_BLOOD_RECIEVER_BLOOD:
      return {
        ...state,
        bloodReciever: action.value,
      };
    case SET_BLOOD_TYPE_BLOOD:
      return {
        ...state,
        bloodType: action.value,
      };
    case SET_DATE_BLOOD:
      return {
        ...state,
        recoveryDate: action.value,
      };
    case SET_DISTANCE_TRAVEL_BLOOD:
      return {
        ...state,
        distanceWillingToTravel: action.value,
      };

    case SET_HOSPITAL_NAME_BLOOD:
      return {
        ...state,
        hospitalName: action.value,
      };
    case SET_PICKUP_SERVICE_BLOOD:
      return {
        ...state,
        pickUpDrop: action.value,
      };
    case SET_DETAILS_AVAILABLE_BLOOD:
      return {
        ...state,
        detailsAvailable: action.value,
      };
    default:
      return state;
  }
}
