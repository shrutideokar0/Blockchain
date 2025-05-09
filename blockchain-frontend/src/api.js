import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:5000",
  headers: { "Content-Type": "application/json" }
});
export const isAuthenticated = () => {
    return localStorage.getItem("token") ? true : false;
  };
  