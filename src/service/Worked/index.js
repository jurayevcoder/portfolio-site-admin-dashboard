import axios from "../axios";

export const useWorked = {
    create: (state) => axios.post("/workeds/create", state, {
        headers: {
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
    }),
    show: () => axios.get(`/workeds/find-all`),

    delete: (id) => axios.delete(`/workeds/delete/${id}`, {
        headers: { "Authorization": `Bearer ${localStorage.getItem('token')}` }
    }),

    change: (id, state) => axios.put(`/workeds/update/${id}`, state, {
        headers: { "Authorization": `Bearer ${localStorage.getItem('token')}` }
    })
}
