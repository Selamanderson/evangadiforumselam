import axios from "axios";

const instance = axios.create({
  //   baseURL: "http://localhost:5500/api",
  // });
  baseURL: "https://evangadiforumselam-1.onrender.com/api",
});
  

// to include token in every request
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
)

export default instance;
