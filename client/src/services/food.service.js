import api from "./api";

export const foodService = {
    getAllFoods: () => api.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/food`),
    getFoodById: (id) => api.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/food/${id}`),
    addNewFood: (data) => api.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/food/vendor/add`, data),
    updateFood: (id, data) => api.put(`${process.env.NEXT_PUBLIC_API_BASE_URL}/food/${id}`, data),
    deleteFood: (id) => api.delete(`${process.env.NEXT_PUBLIC_API_BASE_URL}/food/${id}`),
}