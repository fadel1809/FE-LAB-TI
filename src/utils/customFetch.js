import axios from "axios";
const customFetch = axios.create({
  baseURL: "https://api-lab-ti.my.id/api",
});

export default customFetch;
