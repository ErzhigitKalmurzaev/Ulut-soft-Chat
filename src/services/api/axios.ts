import axios from "axios";

const Base_URL = "http://127.0.0.1:8000/";

const axiosInstance = axios.create({
    baseURL: Base_URL,
    headers: {
        Accept: 'application/json',
		'Content-Type': 'application/json',
    }  
})

export { axiosInstance }