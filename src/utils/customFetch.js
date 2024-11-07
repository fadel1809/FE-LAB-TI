import axios from "axios";
console.log(import.meta.env.DOMAIN_URL);
const customFetch = axios.create({
  baseURL: "https://magang-uhamka.my.id/api",
});

export default customFetch;
