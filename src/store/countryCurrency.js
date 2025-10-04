import { create } from "zustand";
import { persist } from "zustand/middleware"

const useCurrencyStore = create(persist(
    (set) => ({
        country: {label: "Nigeria", value: "NG"},
        currency:  "₦",
        productWord: "",
        setCountryAndCurrency: (country, currency) => set({ country, currency }),
        setProductKeyWord: (productWord) => set({productWord})
    }),
    {
        name: "currency-store"
    }
))

export default useCurrencyStore