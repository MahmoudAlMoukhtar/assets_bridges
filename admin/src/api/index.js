import axios from "axios";

const API = axios.create({
  baseURL: "https://assetsbridgesserver.vercel.app/api",
  //baseURL: "http://localhost:3001/api",
});

API.interceptors.request.use(req => {
  if (localStorage.getItem("assetsBridges")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("assetsBridges")).token
    }`;
  }

  return req;
});

//AUTH Operation
export const signin = formData => API.post("/users/signin", formData);
export const signup = formData => API.post("/users/signup", formData);
export const updateUserData = (id, updates) => API.put(`/users/${id}`, updates);

//contactMessages
export const fetchContactMessages = () => API.get("/messages");
export const fetchContactMessagesId = id => API.get(`/messages/${id}`);
export const deleteContactMessagesById = id => API.delete(`/messages/${id}`);

//services
export const fetchServicesRequests = () => API.get("/services");
export const fetchServiceRequestId = id => API.get(`/services/${id}`);
export const deleteServiceRequestById = id => API.delete(`/services/${id}`);
