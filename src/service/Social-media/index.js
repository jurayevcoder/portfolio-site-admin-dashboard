import axios from "../axios";

export const useSocialMedia = {
    create: (state) => axios.post("/social-media/create", state, {
        headers: {
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
    }),
    show: () => axios.get(`/social-media/find-all`),

    delete: (id) => axios.delete(`/social-media/delete/${id}`, {
        headers: { "Authorization": `Bearer ${localStorage.getItem('token')}` }
    }),

    change: (id, state) => axios.put(`/social-media/update/${id}`, state, {
        headers: { "Authorization": `Bearer ${localStorage.getItem('token')}` }
    })
}
