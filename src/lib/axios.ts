import axios from "axios";

const apiRequest = axios.create({
    baseURL: process.env.BACKEND_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true
})

export default apiRequest