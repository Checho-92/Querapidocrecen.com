import React, { createContext, useContext, useState, ReactNode } from 'react';
import axios from 'axios';

interface CartItem {
  id_carrito: number;
  nombre: string;
  imagen: string;
  precio: number;
  cantidad: number;
  sub_total: number;
  total: number;
}

interface CartContextType {
  cartItems: CartItem[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
  addToCart: (userId: number, productId: number, quantity: number) => Promise<void>;
  updateCartItem: (id_carrito: number, cantidad: number) => void;
  removeFromCart: (id_carrito: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = async (userId: number, productId: number, quantity: number) => {
    try {
      const response = await axios.post('http://localhost:3000/api/cart/add', {
        userId,
        productId,
        quantity,
      });
      // Assuming response.data contains the updated cart items
      setCartItems(response.data);
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  const updateCartItem = (id_carrito: number, cantidad: number) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id_carrito === id_carrito ? { ...item, cantidad, sub_total: item.precio * cantidad, total: item.precio * cantidad } : item
      )
    );
  };

  const removeFromCart = (id_carrito: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id_carrito !== id_carrito));
  };

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, addToCart, updateCartItem, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
