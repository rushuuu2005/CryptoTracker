import axios from "axios";
import { COINGEKO_API_KEY } from "./Constants";

const axiosInstance = axios.create({
    baseURL : COINGEKO_API_KEY,
});

export default axiosInstance;
