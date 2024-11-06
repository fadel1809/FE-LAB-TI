import axios from "axios";
console.log(import.meta.env.DOMAIN_URL);
const customFetch = axios.create({
  baseURL:
    import.meta.env.VITE_ENVIRONMENT === "production"
      ? import.meta.env.VITE_DOMAIN_URL
      : import.meta.env.VITE_LOCAL_URL,
});

export default customFetch;
