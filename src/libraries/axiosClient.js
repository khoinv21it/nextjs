import axios from "axios";

// import { REFRESH_TOKEN, TOKEN } from "../constants";

const axiosClient = axios.create({
  baseURL: 'http://localhost:3333',
  headers: { "Content-Type": "application/json" },
});

export default axiosClient;