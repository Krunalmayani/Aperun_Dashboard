import axios from "axios";
import { api } from "src/Constants/apiConstants";


export const makeAPIRequest = ({
  method,
  url,
  data,
  params,
  header,
  token = true,
}) =>
  new Promise(async (resolve, reject) => {
    const access_token = localStorage.getItem('token');
   
    const apiHeader = {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...(header && header),
      ...(token && { Authorization: `Bearer ${access_token}` }),
    };

    const option = {
      method,
      baseURL: api.BASE_URL,
      url,
      data,
      headers: apiHeader,
      params,
    };

    axios(option)
    .then(async (response) => {
        console.log('response ::', response);
        if (response.status === 200) {
          resolve(response);
        } else {
          reject(response);
        }
      })
      .catch((error) => {
        reject(error?.response?.data);
        throw parseApiError(error);
      });
  });

export const parseApiError = (error) => {
  // console.log("parseApiError  error :", error?.response);
  console.log('error  :',error);
  const { message, code } = error?.response?.data;
  if (message === "Unauthorized" || code === 401) {
  }
};