import {
  SET_CAN_DELIVER_OXYGEN,
  SET_DETAILS_AVAILABLE_OXYGEN,
  SET_FULL_GEAR_STATUS_OXYGEN,
  SET_HOSPITAL_NAME_ADDRESS_OXYGEN,
  SET_OXYGEN_RECIEVER_OXYGEN,
} from "../actions/constants";

let initialState = {
  oxygenReciever: true,
  hospitalName: null,
  fullGear: false,
  canDeliver: false,
  oxygenDetailsAvailable: false,
};

export default function oxygenReducer(state = initialState, action) {
  switch (action.type) {
    case SET_OXYGEN_RECIEVER_OXYGEN:
      return {
        ...state,
        oxygenReciever: action.value,
      };
    case SET_HOSPITAL_NAME_ADDRESS_OXYGEN:
      return {
        ...state,
        hospitalName: action.value,
      };
    case SET_FULL_GEAR_STATUS_OXYGEN:
      return {
        ...state,
        fullGear: action.value,
      };
    case SET_CAN_DELIVER_OXYGEN:
      return {
        ...state,
        canDeliver: action.value,
      };
    case SET_DETAILS_AVAILABLE_OXYGEN:
      return {
        ...state,
        oxygenDetailsAvailable: action.value,
      };
    default:
      return state;
  }
}
