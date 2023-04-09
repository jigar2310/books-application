import axios from "axios";
import { toast } from "react-toastify";
const API_URL = "http://localhost:3000/";

export const axiosGet = async (url, data) => {
  try {
    return await axios.get(`${API_URL}${url}`, {
      params: data,
    });
  } catch (error) {
    if (error.response.status === 401) {
      toast.error("You are not authorized to perform this action");
    } else if (error.response.status >= 500) {
      toast.error("Internal server error");
    } else {
      toast.error(error?.response?.data?.message || "Something went wrong");
    }
    return error;
  }
};

export const axiosPost = async (url, data) => {
  try {
    return await axios.post(`${API_URL}${url}`, data);
  } catch (error) {
    if (error.response.status === 401) {
      toast.error("You are not authorized to perform this action");
    } else if (error.response.status >= 500) {
      toast.error("Internal server error");
    } else {
      toast.error(error?.response?.data?.message || "Something went wrong");
    }
    return error;
  }
};

export const axiosDelete = async (url) => {
  try {
    return await axios.delete(`${API_URL}${url}`);
  } catch (error) {
    if (error.response.status === 401) {
      toast.error("You are not authorized to perform this action");
    } else if (error.response.status >= 500) {
      toast.error("Internal server error");
    } else {
      toast.error(error?.response?.data?.message || "Something went wrong");
    }
    return error;
  }
};

// book search api with @param query type string
export const searchGoogleBooks = async (query) => {
  try {
    return await axios(
      `https://www.googleapis.com/books/v1/volumes?q=${query}`
    );
  } catch (error) {
    if (error.response.status === 401) {
      toast.error("You are not authorized to perform this action");
    } else if (error.response.status >= 500) {
      toast.error("Internal server error");
    } else {
      toast.error(error?.response?.data?.message || "Something went wrong");
    }
    return error;
  }
};
