/* eslint-disable no-unused-vars */
import axios from "axios";

const customFetch = axios.create({
  baseURL: "http://202.10.41.238:3000/api",
});

export default customFetch;
