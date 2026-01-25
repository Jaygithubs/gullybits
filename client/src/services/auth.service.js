import api from "./api";

export const authService = {
    login: (data) => api.post("/login", data),
    register: (data) => api.post("/register", data),
    forgotPassword: (data) => api.post("/forgot-password", data),
    resetPassword: (data) => api.post("/reset-password", data),
    verifyEmail: (token) => api.post("/verify-email", { token }),
};

