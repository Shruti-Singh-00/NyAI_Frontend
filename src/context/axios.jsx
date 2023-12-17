import axios from "axios";

const baseURL = "http://localhost:7000";

const instance = axios.create({
  // .. congigure axios baseURL
  baseURL: `${baseURL}`
});

export default instance;