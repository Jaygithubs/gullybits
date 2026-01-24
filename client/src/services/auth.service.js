import api from "./api";

export const authService = {
    login: (data) => api.post("/login", data),
    register: (data) => api.post("/register", data),
    verifyEmail: (token) => api.post("/verify-email", { token }),
};

