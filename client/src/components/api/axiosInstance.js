import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "/api",
});

let accessToken = "";

axiosInstance.interceptors.request.use((config) => {
  if (!config.headers.Authorization) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (res) => res,
  async (err) => {
    const prev = err.config;
    if (err.status === 403 && !prev.sent) {
      prev.sent = true;
      const response = await axios.get("/api/auth/refresh");
      accessToken = response.data.accessToken;
      prev.headers.Authorization = `Bearer ${accessToken}`;
      return axiosInstance(prev);
    }
    return Promise.reject(err);
  }
);

export default axiosInstance;