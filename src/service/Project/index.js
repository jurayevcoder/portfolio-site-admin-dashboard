import axios from "../axios";

export const useProject = {
    create: (state) => axios.post("/projects/create", state, {
        headers: {
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
    }),
    show: () => axios.get(`/projects/find-all`),

    delete: (id) => axios.delete(`/projects/delete/${id}`, {
        headers: { "Authorization": `Bearer ${localStorage.getItem('token')}` }
    })
}
