import axios from "axios";
import { v4 as uuidv4 } from "uuid";

let xAppId = localStorage.getItem("uuid");
if (xAppId == null) {
  xAppId = uuidv4();
  localStorage.setItem("uuid", xAppId);
}

axios.create({
    baseURL: "http://localhost:3000",
});

axios.interceptors.response.use(
  function (response) {
    // Do something with response data
    return response;
  },
  function (error) {
    // Do something with response error
    handleResponseError(error);
    return Promise.reject(error);
  }
);

function handleResponseError(error) {
  //   if (error.response) {
  //     if (error.response.data.code >= 400 && error.response.data.code < 500) {
  //       Vue.toasted.global.error(error.response.data.message);
  //     }
  //     else if (error.response.data.code == 500) {
  //       Vue.toasted.global.error("Unable to connect to the server");
  //     }
  //     else{
  //       Vue.toasted.global.error(`Request Gagal. Error Code ${error.response.data.code}`)
  //     }
  //   }
  //   //special case ERR_CONN_REFUSED, etc.
  //   else if (!error.response) {
  //     Vue.toasted.global.error("Error: Network Error");
  //   }
}

export { axios };
