import axios from "axios";
const API_URL = "https://jsonplaceholder.typicode.com";

export const getUsers = async () => {
  try {
    await axios.get(`${API_URL}/users`);
  } catch (error) {
    throw new error(error);
  }
};
