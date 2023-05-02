import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3001/api",
});
API.interceptors.request.use(req => {
  if (localStorage.getItem("assetsBridges")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("assetsBridges")).token
    }`;
  }

  return req;
});
//contactMessage
export const sendContactMessage = contactMessage =>
  API.post("/messages", contactMessage);
//contactMessage
export const sendServiceRequest = serviceRequest =>
  API.post("/services", serviceRequest);
