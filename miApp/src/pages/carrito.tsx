import React, { useEffect } from 'react';
import axios from 'axios';
import { useUser } from '../context/UserContext';
import { useCart } from '../context/CartContext';

const Carrito: React.FC = () => {
  const { user } = useUser();
  const { cartItems, setCartItems, updateCartItem, removeFromCart } = useCart();

  useEffect(() => {
    const fetchCartItems = async () => {
      if (!user) return;
      try {
        const response = await axios.get(`http://localhost:3000/api/cart/${user.id}`);
        setCartItems(response.data);
      } catch (error) {
        console.error('Error al obtener artículos del carrito:', error);
      }
    };

    fetchCartItems();
  }, [user, setCartItems]);

  const handleUpdateQuantity = async (cartItemId: number, quantity: number) => {
    if (quantity <= 0) return;

    try {
      await axios.put('http://localhost:3000/api/cart/update', {
        userId: user?.id,
        cartItemId,
        quantity
      });
      updateCartItem(cartItemId, quantity);
    } catch (error) {
      console.error('Error al actualizar la cantidad:', error);
    }
  };

  const handleDeleteItem = async (cartItemId: number) => {
    try {
      await axios.delete('http://localhost:3000/api/cart/delete', {
        data: { userId: user?.id, cartItemId }
      });
      removeFromCart(cartItemId);
    } catch (error) {
      console.error('Error al eliminar el artículo del carrito:', error);
    }
  };

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h2 className="text-2xl font-extrabold text-cyan-700">
          Por favor, inicia sesión para ver tu carrito de compras.
        </h2>
      </div>
    );
  }

  return (
    <div className="font-[sans-serif]">
      <div className="grid lg:grid-cols-3">
        <div className="lg:col-span-2 p-10 bg-white overflow-x-auto">
          <div className="flex border-b pb-4">
            <h2 className="text-2xl font-extrabold text-cyan-700 flex-1">Carrito de compras</h2>
            <h3 className="text-xl font-extrabold text-cyan-700">{cartItems.length} Items</h3>
          </div>
          <div>
            <table className="mt-6 w-full border-collapse divide-y">
              <thead className="whitespace-nowrap text-left">
                <tr>
                  <th className="text-base text-[#333] p-4">Descripción</th>
                  <th className="text-base text-[#333] p-4">Cantidad</th>
                  <th className="text-base text-[#333] p-4">Precio</th>
                  <th className="text-base text-[#333] p-4">Subtotal</th>
                </tr>
              </thead>
              <tbody className="whitespace-nowrap divide-y">
                {cartItems.map((item) => (
                  <tr key={item.id_carrito}>
                    <td className="py-6 px-4">
                      <div className="flex items-center gap-6 w-max">
                        <div className="h-36 shrink-0">
                          <img src={item.imagen} className="w-full h-full object-contain" />
                        </div>
                        <div>
                          <p className="text-md font-bold text-[#333]">{item.nombre}</p>
                          <button type="button" className="mt-4 font-semibold text-red-400 text-sm" onClick={() => handleDeleteItem(item.id_carrito)}>
                            Quitar
                          </button>
                        </div>
                      </div>
                    </td>
                    <td className="py-6 px-4">
                      <div className="flex divide-x border w-max">
                        <button type="button" className="bg-gray-100 px-4 py-2 font-semibold" onClick={() => handleUpdateQuantity(item.id_carrito, item.cantidad - 1)}>
                          -
                        </button>
                        <button type="button" className="bg-transparent px-4 py-2 font-semibold text-[#333] text-md">
                          {item.cantidad}
                        </button>
                        <button type="button" className="bg-gray-800 text-white px-4 py-2 font-semibold" onClick={() => handleUpdateQuantity(item.id_carrito, item.cantidad + 1)}>
                          +
                        </button>
                      </div>
                    </td>
                    <td className="py-6 px-4">
                      <h4 className="text-md font-bold text-[#333]">${item.precio}</h4>
                    </td>
                    <td className="py-6 px-4">
                      <h4 className="text-md font-bold text-[#333]">${item.sub_total}</h4>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="bg-gray-50 p-10">
          <h3 className="text-xl font-extrabold text-[#333] border-b pb-4">Orden de compra</h3>
          <ul className="text-[#333] divide-y mt-6">
            <li className="flex flex-wrap gap-4 text-md py-4">Subtotal de productos <span className="ml-auto font-bold">{cartItems.reduce((acc, item) => acc + item.cantidad, 0)} Items</span></li>
            <li className="flex flex-wrap gap-4 text-md py-4">Subtotal de precios <span className="ml-auto font-bold">${cartItems.reduce((acc, item) => acc + item.sub_total, 0)}</span></li>
            <li className="flex flex-wrap gap-4 text-md py-4 font-bold">Total <span className="ml-auto">${cartItems.reduce((acc, item) => acc + item.total, 0)}</span></li>
          </ul>
          <button type="button" className="mt-6 text-md px-6 py-2.5 w-full bg-blue-600 hover:bg-blue-700 text-white rounded">Realizar pedido</button>
        </div>
      </div>
    </div>
  );
};

export default Carrito;
