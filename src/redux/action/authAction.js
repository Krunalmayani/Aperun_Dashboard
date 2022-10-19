import { api, GET, POST } from "src/Constants/apiConstants";
import { makeAPIRequest } from "src/utils/globalFunctions";
import { showNotification } from "src/utils/tostyMessage";
import { GET_USER_DATA, SET_TOKEN, USER_DATA } from "./type";


export const getAllUser = () => async (dispatch) => {
  return makeAPIRequest({
    method: GET,
    url: api.getAllUser,
    token: false
  }).then((response) => {

    if (response?.data?.success === true) {
      dispatch({ type: GET_USER_DATA, payload: response?.data?.data })
    } else {
      showNotification('error', response?.data?.message)
    }
  }).catch((err) => {
    showNotification('error', err?.message)
  });
}

export const logIn = (body, callback) => async (dispatch) => {
  return makeAPIRequest({
    method: POST,
    url: api.login,
    data: body,
    token: false
  }).then((response) => {

    if (response?.data?.success === true) {
      dispatch({ type: USER_DATA, payload: response?.data?.user })
      dispatch({ type: SET_TOKEN, payload: response?.data?.token })
      localStorage.setItem('token', JSON.stringify(response.data.token)?.replace(/"/g, ''));
      showNotification('success', 'login Successfully')
      callback();
    } else {
      showNotification('error', response?.data?.message)
    }
  }).catch((err) => {
    showNotification('error', err?.message)
  })
}
export const register = (body, callback) => async (dispatch) => {
  return makeAPIRequest({
    method: POST,
    url: api.signUp,
    data: body,
    token: false
  }).then((response) => {

    if (response?.data?.success === true) {

      dispatch({ type: USER_DATA, payload: response?.data?.user })
      dispatch({ type: SET_TOKEN, payload: response?.data?.token })
      localStorage.setItem('token', JSON.stringify(response.data.token)?.replace(/"/g, ''));
      showNotification('success', 'register Successfully')
      callback();
    } else {
      showNotification('error', response?.data?.message)
    }
  }).catch((err) => {
    showNotification('error', err?.message)
  })
}

export const ChangeWalletAddress = (body) => async (dispatch) => {
  return makeAPIRequest({
    method: POST,
    url: api.changeWalletAddress,
    data: body,
    token: true
  }).then((response) => {

    if (response?.data?.success === true) {
      showNotification('success', response?.data?.message)
      dispatch(getAllUser())
    } else {
      showNotification('error', response?.data?.message)
    }
  }).catch((err) => {
    console.log('err 0', err?.message);
    showNotification('error', err?.message)
  });
}


export const getUserInfo = () => async (dispatch) => {
  return makeAPIRequest({
    method: GET,
    url: api.getUser,
    token: true
  }).then((response) => {
    if (response?.data?.success === true) {
      dispatch({ type: USER_DATA, payload: response?.data?.data || {} })
    } else {
      showNotification('error', response?.data?.message)
    }
  }).catch((err) => {
    showNotification('error', err?.message)
  });
}
