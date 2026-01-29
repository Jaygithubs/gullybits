import { create } from "zustand";
import { setToken, removeToken } from "../utils/token";

export const useAuthStore = create((set) => ({
  user: null,
  token: null,

  login: (user, token) => {
    setToken(token);
    set({ user, token });
  },

  logout: () => {
    removeToken();
    set({ user: null, token: null });
  },
}));