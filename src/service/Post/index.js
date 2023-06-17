import axios from "../axios";

export const usePost = {
    create: (state) => axios.post("/posts/create", state, {
        headers: {
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
    }),
    show: () => axios.get(`/posts/find-all`),

    delete: (id) => axios.delete(`/posts/delete/${id}`, {
        headers: { "Authorization": `Bearer ${localStorage.getItem('token')}` }
    })
}
