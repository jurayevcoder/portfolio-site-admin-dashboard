import axios from "../axios";


export const useAuth = {
    login: (user) => axios.post("/users/admin-login", user),
    logout: () => axios.post("/users/logout")
}
