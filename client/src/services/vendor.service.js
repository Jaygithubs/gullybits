import api from "./api";

export const vendorService = {
    getVendorOrders: () => api.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/vendors/orders`),
}