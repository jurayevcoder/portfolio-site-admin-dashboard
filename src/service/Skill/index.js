import axios from "../axios";

export const useSkill = {
    create: (state) => axios.post("/skills/create", state, {
        headers: {
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
    }),
    show: () => axios.get(`/skills/find-all`),

    delete: (id) => axios.delete(`/skills/delete/${id}`, {
        headers: { "Authorization": `Bearer ${localStorage.getItem('token')}` }
    }),

    change: (id, state) => axios.put(`/skills/update/${id}`, state, {
        headers: { "Authorization": `Bearer ${localStorage.getItem('token')}` }
    })
}
