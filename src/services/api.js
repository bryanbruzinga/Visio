import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/users",
});

export const api = {
  get(endpoint) {
    return axiosInstance.get(endpoint);
  },
};
