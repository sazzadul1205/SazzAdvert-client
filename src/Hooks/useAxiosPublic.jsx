import axios from "axios";

const axiosPublic = axios.create({
  // baseURL: 'http://localhost:5000',
  baseURL: "https://sazz-vert-server.vercel.app",
  // baseURL: "https://sazz-vert-server-3jpimnqx9-sazzadul-islams-projects.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
