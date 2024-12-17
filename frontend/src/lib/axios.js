import axios from "axios";

export const axiosInstance = axios.create({
    baseURL:  import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api",
    withCredentials: true, //send the cookies in every single request
});

// Add interceptors for debugging
axiosInstance.interceptors.response.use(
    response => response,
    error => {
        console.error("Error in Axios response:", error.message);
        return Promise.reject(error);
    }
);