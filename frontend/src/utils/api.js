import axios from "axios";
import BACKEND_URL from "../config";

const API = axios.create({ baseURL: `${BACKEND_URL}/api` });

API.interceptors.request.use((req) => {
    const user = JSON.parse(localStorage.getItem("hirelane_user"));
    if(user?.token){
        req.headers.Authorization = `Bearer ${user.token}`;
    }
    return req;
});

export default API;