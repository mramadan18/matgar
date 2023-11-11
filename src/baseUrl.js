import axios from "axios";

const baseUrl = axios.create({ baseURL: "https://matjar.onrender.com" });

export default baseUrl;
