import api from "./api";

export const userService = {
    getAllUsers: () => api.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/users`),
    updateUserProfile: (data) => api.put("/users/:id", data),
    changePassword: (data) => api.post("/user/change-password", data),
    deleteUserAccount: () => api.delete("/user/delete-account"),
};