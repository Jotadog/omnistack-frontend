import axios from "axios";

const api = axios.create({
  baseURL: "https://api-omnistack-jotadog.herokuapp.com"
});

export default api;
