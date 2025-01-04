import axios from "axios";
const ENV_DEV = "http://localhost:3000/api"
const ENV_STAGING = "https://api-lab-ti.my.id/api"
const ENV = "development"
const customFetch = axios.create({
  baseURL: ENV === "development" ? ENV_DEV : ENV_STAGING,
});

export default customFetch;