////// base end point
export const BASE_URL = "http://covaid-stg.herokuapp.com";

///// blood end points
export const GET_USER_DETAILS_BLOOD = `${BASE_URL}/blood/`;
export const SAVE_USER_DETAILS_BLOOD = `${BASE_URL}/blood/entry`;
export const SEND_REQUEST_FOR_BLOOD = `${BASE_URL}/blood/receive/`;
export const GET_DONATION_REQUEST_BLOOD = `${BASE_URL}/blood/donate/`;
export const PAIR_FORMATION_API_BLOOD = `${BASE_URL}/blood/accept/`;
export const GET_RECIEVE_REQUEST_BLOOD = `${BASE_URL}/blood/receive/`;

////// authentication end points
export const REGISTER_USER = `${BASE_URL}/user/register`;
export const LOGIN_USER = `${BASE_URL}/user/login`;
export const PROFILE_INFORMATION = `${BASE_URL}/profile/`;
