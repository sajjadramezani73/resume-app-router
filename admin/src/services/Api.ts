import axios from "axios";
// import Cookies from "js-cookie";
// import { baseUrl } from "../constant/index";

const service = axios.create();
service.defaults.baseURL = import.meta.env.VITE_BASE_URL;
// service.defaults.timeout = 15000;
service.interceptors.request.use(
  (config: any) => {
    // const token = Cookies.get("token");
    config.headers = {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    };
    // const location = localStorage.getItem("location");
    // if (location) {
    //   config.headers.location = location;
    // }
    // if (token) {
    //     config.headers.Authorization = "Bearer " + token;
    // }
    return config;
  },
  (error) => {
    return error;
  }
);
service.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    return Promise.reject(err);
  }
);
export default service;
