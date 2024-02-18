import axios from "axios"
const axiosInstance = axios.create({
  //Local instance firebase URL
  // baseURL: "http://127.0.0.1:5001/building--clone/us-central1/api",

  //deployed version amazon-clone on render.com
  baseURL: "https://amazon-backend-x8ib.onrender.com",
});

export {axiosInstance}