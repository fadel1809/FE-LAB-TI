/* eslint-disable no-unused-vars */
import axios from "axios";

const customFetch = axios.create({
  baseURL: "https://magang-uhamka.my.id/api",
});

export default customFetch;
