import { create } from "zustand";
import { persist } from "zustand/middleware";


const useProductStore = create(persist(
        (set) => ({
            page: 1,
            setPage:(page) => set({page})
        }),
         {
      name: "product-store", // key for localStorage
    }
)

)
export default useProductStore
