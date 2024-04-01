import axios from "axios";

// Tạo một instance Axios với baseURL của server
const axiosInstance = axios.create({
    baseURL: "http://127.0.0.1:8000/api", // Đặt baseURL là địa chỉ của server của bạn
});

export default axiosInstance;
