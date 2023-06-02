import axios from "axios"
import AuthHeader from "./auth-header"

const getPublicContent = () => {
  return axios.get(import.meta.env.API_URL_TEST + "all");
}

const getUserBoard = () => {
  return axios.get(import.meta.env.API_URL_TEST + "user", { headers: AuthHeader() })
}

const getModeratorBoard = () => {
  return axios.get(import.meta.env.API_URL_TEST + "mod", { headers: AuthHeader() })
}

const getAdminBoard = () => {
  return axios.get(pimport.meta.env.API_URL_TEST + "admin", { headers: AuthHeader() })
}

const UserService = {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard
}

export default UserService
