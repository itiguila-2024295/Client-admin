import { create } from "zustand";
import * as authApi from "../../../shared/api/auth";
import { use } from "react";
 
const getAllUsers = authApi.getAllUsers;
 
export const useUserManagementStore = create((set, get) => ({
    users: [],
    loading: false,
    error: null,
    filters: {},
 
    setFilters: (filters) => {
        set({ filters });
    },
    setUsers: (users) => {
        set({ users });
    },
    fetchUsers: async (apiFn = getAllUsers, options = {}) => {
        const {force =  false} = options;
        const state = get();
        //Evitar múltiples llamadas si ya se están cargando usuarios o si ya los tenemos a menos que se fuerce la recarga
        if (state.loading) return;
       
        //Por si ya están cargados , no volver a pedirlos a menos que se fuerce la recarga
        if (!force && state.users.length > 0)return;
 
        set({ loading: true, error: null });
        try {

            const fetcher = typeof apiFn === "function" ? apiFn : getAllUsers;

            const result = await fetcher();
            set({ users: result.data || result, loading: false });

        } catch (err) {
            set({ error: err.message || "Error al cargar usuarios", loading: false });
        }
    }
}));