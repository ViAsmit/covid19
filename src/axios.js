import axios from "axios";

const baseURL = "http://127.0.0.1:8000/api/";
// const baseURL = "https://covid-19-oxygen.herokuapp.com/api/";

const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

export default axiosInstance;
