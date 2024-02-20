// useCartStore.js
import create from "zustand";

const useCartStore = create((set) => ({
  cartItems: [],

  // Add item to the cart
  addToCart: (itemId, item) => {
    set((state) => {
      const { cartItems } = state;
      const selectedItem = cartItems.find((item) => item.id === itemId);
      console.log(selectedItem);
      if (selectedItem) {
        const isItemInCart = cartItems.some((item) => item.id === itemId);

        if (isItemInCart) {
          const updatedCart = cartItems.map((item) =>
            item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
          );
          return { cartItems: updatedCart };
        } else {
          return {
            cartItems: [...cartItems, { ...selectedItem, quantity: 1 }],
          };
        }
      } else {
        // If the item is not in the cart, add it with quantity 1
        return {
          cartItems: [...cartItems, item],
        };
      }
    });
  },

  // Remove item from the cart
  removeFromCart: (itemId) => {
    set((state) => {
      const { cartItems } = state;
      const updatedCart = cartItems.map((item) =>
        item.id === itemId
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 0 }
          : item
      );

      const filteredCart = updatedCart.filter((item) => item.quantity > 0);
      return { cartItems: filteredCart };
    });
  },
}));

export default useCartStore;
