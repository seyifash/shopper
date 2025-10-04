import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCartStore = create(
  persist(
    (set) => ({
      cartItems: [
        { id: 1, name: "T-Shirt", price: 25 },
        { id: 2, name: "Sneakers", price: 50 },
      ],
      addToCart: (item) =>
        set((state) => ({
          cartItems: [...state.cartItems, item],
        })),
      removeFromCart: (id) =>
        set((state) => ({
          cartItems: state.cartItems.filter((item) => item.id !== id),
        })),
      clearCart: () => set({ cartItems: [] }),
    }),
    {
      name: "cart-store", // persisted in localStorage
    }
  )
);

export default useCartStore;
