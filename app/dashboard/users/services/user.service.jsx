
const api_url = "http://127.0.0.1:8000/api/user"

const user_service = {
    login: async (form) => {
        return await fetch(`${api_url}/login`, {
            method: 'POST',
            body: form,
        }).then((data) => data.json())
    },

    userByPage: async (page) => {
        return await fetch(`${api_url}?page=${page}`, {
            method: "GET"
        }).then(data => data.json())
    },

    create: async (form) => {
        return await fetch(`${api_url}`, {
            method: "POST",
            body: form,
        }).then(data => data.json())
    },

    userById: async (id) => {
        return await fetch(`${api_url}/${id}`, {
            method: "GET"
        }).then(data => data.json())
    },

    update: async (form, id) => {
        return await fetch(`${api_url}/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(form)
        }).then(data => data.json())
    },

    updatePass: async (form, id) => {
        return await fetch(`${api_url}/pass/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(form)
        }).then(data => data.json())
    },

    delete: async (id) => {
        return await fetch(`${api_url}/${id}`, {
            method: "DELETE"
        }).then(data => data.json())
    }
}

export default user_service;