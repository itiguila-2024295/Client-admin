import { create} from "zustand";
import { 
    getFields as getFieldsRequest
} from "../../../shared/api/admin";

export const useFieldStore = create((set, get) => ({
    fields: [],
    loading: false,
    error: null,
    getFields: async () => {
        set({ loading: true, error: null });   
        try {
            set({ loading: true, error: null });
            const response = await getFieldsRequest();
            console.log(response)

            set({ 
                fields: response.data.data, 
                loading: false 
            });
        } catch (err) {
            set({ 
                error: err.response?.data?.message || "Error fetching fields", 
                loading: false
            });
        }
    }
}))