import axios from "axios";
import { toast } from "react-toastify";
const API_URL = 'http://localhost:3000/api/'
const setupAxios = (store) => {
  axios.interceptors.request.use((request) => {
    const authToken = localStorage.getItem("token");
    if (authToken) {
      request.headers.Authorization = `JWT ${authToken}`;
    }
    return request;
  });
  axios.interceptors.response.use(
    (res) => {
      const { isError } = res;
      if (isError) {
      }
      return res;
    },
    (e) => {
      if (e.response.status === 401) {
        localStorage.removeItem("token");
        window.location.reload();
      }
    }
  );
};

export default setupAxios;

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

export const axiosPatch = async (url, data) => {
  try {
    return await axios.patch(`${API_URL}${url}`, data);
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

export const axiosPut = async (url, data) => {
  try {
    return await axios.put(`${API_URL}${url}`, data);
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

export const searchGoogleBooks = (query) => {
    return axios(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
  };