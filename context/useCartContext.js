import { create } from "zustand";

const useCartContext = create((set) => ({
    cart: [],
    addProduct: (product) => set((state) => {
        let updatedCart = [...state.cart];
        const existingProduct = updatedCart.find(item => item.id === product.id);

        if (existingProduct) {
            // If the product exists, increment the quantity
            existingProduct.quantity += product.quantity;
        } else {
            // If the product is not in the cart, add it
            updatedCart = [...updatedCart, product];
        }

        return { cart: updatedCart };
    }),
    removeProduct: (productId) => set((state) => {
        const newCart = state.cart.filter((item) => item.id !== productId);
        return { cart: newCart };
    }),
}));

export default useCartContext;
