import axios from "../axios";

export const useInfo = {
    create: (state) => axios.post("/about-us/create", state, {
        headers: {
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
    }),
    show: () => axios.get(`/about-us/find-all`),

    delete: (id) => axios.delete(`/about-us/delete/${id}`, {
        headers: { "Authorization": `Bearer ${localStorage.getItem('token')}` }
    }),

    change: (id, add) => axios.put(`/about-us/update/${id}`, add, {
        headers: {
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
    })
}
