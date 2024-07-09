import axios from "axios";
import { enqueueSnackbar } from "notistack";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

api.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  async function (error) {
    const { response } = error;
    enqueueSnackbar("Something Went Wrong !!!", {
      variant: "error",
    });
    return Promise.reject(response);
  }
);

export default api;
