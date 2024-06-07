import axios from 'axios';

export const getCartItems = async (userId: string) => {
  const response = await axios.get(`http://localhost:3000/api/cart/${userId}`);
  return response.data;
};

export const addItemToCart = async (userId: string, itemId: number, quantity: number) => {
  const response = await axios.post(`http://localhost:3000/api/cart/${userId}/add`, { itemId, quantity });
  return response.data;
};

export const updateCartItemQuantity = async (userId: string, itemId: number, quantity: number) => {
  const response = await axios.put(`http://localhost:3000/api/cart/${userId}/update`, { itemId, quantity });
  return response.data;
};

export const removeItemFromCart = async (userId: string, itemId: number) => {
  const response = await axios.delete(`http://localhost:3000/api/cart/${userId}/remove`, { data: { itemId } });
  return response.data;
};
