//carrito.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useUser } from '../context/UserContext';
import { useCart } from '../context/CartContext';
import SkeletonCardCarrito from '../components/skeletonCardCarrito';

const Carrito: React.FC = () => {
  const { user } = useUser();
  const { cartItems, setCartItems, updateCartItem, removeFromCart } = useCart() ?? { cartItems: [], setCartItems: () => {}, updateCartItem: () => {}, removeFromCart: () => {} };
  const [showAddressModal, setShowAddressModal] = useState(false);
  const [address, setAddress] = useState('');
  const [orderMessage, setOrderMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    const fetchCartItems = async () => {
      if (!user) return;
      try {
        const response = await axios.get(`http://localhost:3000/api/cart/${user.id}`);
        setCartItems(response.data);
      } catch (error) {
        console.error('Error al obtener artículos del carrito:', error);
      } finally {
        setLoading(false);
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
      setSuccessMessage('Cantidad actualizada con éxito');
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
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
      setSuccessMessage('Artículo eliminado con éxito');
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
    } catch (error) {
      console.error('Error al eliminar el artículo del carrito:', error);
    }
  };

  const handleOrder = async () => {
    if (!address) {
      alert('Por favor, ingresa una dirección');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/api/orders/create', {
        id_cliente: user?.id,
        direccion: address
      });

      if (response.status === 201) {
        setOrderMessage('Pedido realizado con éxito');
        setCartItems([]); // Limpiar carrito
      } else {
        setOrderMessage('Error al realizar el pedido');
      }
      setTimeout(() => {
        setOrderMessage('');
      }, 3000);
    } catch (error) {
      console.error('Error al realizar el pedido:', error);
      setOrderMessage('Error al realizar el pedido');
      setTimeout(() => {
        setOrderMessage('');
      }, 3000);
    }
  };

  return (
    <div className="font-[sans-serif]">
      <div className="grid lg:grid-cols-3">
        <div className="lg:col-span-2 p-10 bg-white overflow-x-auto">
          <div className="flex border-b pb-4">
            <h2 className="text-2xl font-extrabold text-cyan-700 flex-1">Carrito de compras</h2>
            <h3 className="text-xl font-extrabold text-cyan-700">{Array.isArray(cartItems) ? cartItems.length : 0} Items</h3>
          </div>
          {successMessage && (
            <div className="mb-4 p-4 text-white bg-green-500 rounded">
              {successMessage}
            </div>
          )}
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
                {loading ? (
                  Array.from({ length: 3 }).map((_, index) => <SkeletonCardCarrito key={index} />)
                ) : (
                  Array.isArray(cartItems) ? cartItems.map((item) => (
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
                  )) : null
                )}
              </tbody>
            </table>
          </div>
        </div>
        <div className="bg-gray-50 p-10">
          <h3 className="text-xl font-extrabold text-[#333] border-b pb-4">Orden de compra</h3>
          <ul className="text-[#333] divide-y mt-6">
            <li className="flex flex-wrap gap-4 text-md py-4">Subtotal <span className="ml-auto font-bold">${Array.isArray(cartItems) ? cartItems.reduce((acc, item) => acc + item.sub_total, 0) : 0}</span></li>
            <li className="flex flex-wrap gap-4 text-md py-4 font-bold">Total <span className="ml-auto">${Array.isArray(cartItems) ? cartItems.reduce((acc, item) => acc + item.total, 0) : 0}</span></li>
            <li className="flex flex-wrap gap-4 text-md py-4">Cantidad Total <span className="ml-auto font-bold">{Array.isArray(cartItems) ? cartItems.reduce((acc, item) => acc + item.cantidad, 0) : 0}</span></li>
          </ul>
          <button type="button" onClick={() => setShowAddressModal(true)} className="mt-6 text-md px-6 py-2.5 w-full bg-blue-600 hover:bg-blue-700 text-white rounded">Realizar pedido</button>
        </div>
      </div>
  
      {showAddressModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50" onClick={() => setShowAddressModal(false)}>
          <div className="bg-white rounded-lg p-8 shadow-lg w-96 relative" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-2xl mb-4">Ingresar Dirección</h2>
            {orderMessage && (
              <div className="mb-4 p-4 text-white bg-green-500 rounded absolute top-0 left-1/2 transform -translate-x-1/2 mt-2 w-80 text-center">
                {orderMessage}
              </div>
            )}
            <label className="block mb-2">
              Dirección:
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full mt-1 p-2 border rounded"
              />
            </label>
            <div className="flex justify-end">
              <button onClick={() => setShowAddressModal(false)} className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded mr-2">Cancelar</button>
              <button onClick={handleOrder} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Guardar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carrito;
