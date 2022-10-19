import { api, GET } from "src/Constants/apiConstants";
import { makeAPIRequest } from "src/utils/globalFunctions";
import { showNotification } from "src/utils/tostyMessage";
import { GET_TOKEN_HISTORY } from "./type";


export const getAllWithdrawHistory = () => async (dispath) => {
  
  return makeAPIRequest({
    method: GET,
    url: api.withdrawHistory,
    token: true
  }).then((response) => {
    console.log('response ::',response);
    if (response?.data?.success === true) {
      dispath({ type: GET_TOKEN_HISTORY, payload: response?.data })
    } else {
      showNotification('error', response?.data?.message)
    }
  }).catch((err) => {
    showNotification('error', err?.message)
  });
}  
