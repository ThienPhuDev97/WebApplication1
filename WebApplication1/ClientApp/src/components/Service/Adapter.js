import axios from 'axios';
axios.defaults.headers.common["x-csrf-token"] = "abcdef";
export const api = axios.create({
    baseURL: "https://localhost:5001"
});
export const url = {
    category: {
        url: "api/categories",
        method: "delete",
        params: {}
    },
    today_special: {
        url: "/api/today-special",
        method: "GET",
        params: {}
    }
}