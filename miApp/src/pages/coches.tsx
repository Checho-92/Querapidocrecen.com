import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useUser } from '../context/UserContext';
import { useCart } from '../context/CartContext';
import SkeletonCardCoches from '../components/skeletonCardCoches';

interface Product {
  id_producto: number;
  categoria: string;
  nombre: string;
  talla: number | null;
  estado: string | null;
  precio: number;
  imagen: string;
}

const Coches: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [alertMessage, setAlertMessage] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const { user } = useUser();
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:3000/api/products/category/coches');
        setProducts(response.data);
      } catch (error) {
        console.error('Error al obtener productos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = async (productId: number) => {
    if (!user) {
      setAlertMessage('Debes estar registrado para agregar productos al carrito');
      setTimeout(() => setAlertMessage(''), 3000); // Oculta el mensaje después de 3 segundos
      return;
    }

    try {
      await addToCart(user.id, productId, 1);
      setAlertMessage('Producto agregado al carrito');
      setTimeout(() => setAlertMessage(''), 3000); // Oculta el mensaje después de 3 segundos
    } catch (error) {
      console.error('Error al agregar al carrito:', error);
      setAlertMessage('Error al agregar al carrito');
      setTimeout(() => setAlertMessage(''), 3000); // Oculta el mensaje después de 3 segundos
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    const alertElement = document.getElementById('alertMessage');
    if (alertElement && !alertElement.contains(event.target as Node)) {
      setAlertMessage('');
    }
  };

  useEffect(() => {
    if (alertMessage) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [alertMessage]);

  return (
    <section className="text-gray-600 body-font mx-8">
      <div className="container py-2 pb-12 mx-auto">
        <div className="mb-8 my-0 text-cyan-700 text-3xl">
          <h1>Coches</h1>
        </div>
        {alertMessage && (
          <div id="alertMessage" className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 text-white bg-green-500 rounded max-w-xs text-center z-50">
            {alertMessage}
          </div>
        )}
        <div className="flex flex-wrap -m-4 space-x-12 justify-center">
          {loading
            ? Array.from({ length: 6 }).map((_, index) => <SkeletonCardCoches key={index} />)
            : products.map((product) => (
              <div key={product.id_producto} className="lg:w-1/4 md:w-1/2 p-4 w-full border-2 rounded-md transform transition-transform duration-300 hover:scale-105">
                <a className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="car"
                    className="object-cover object-center w-full h-full block"
                    src={product.imagen}
                  />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    {product.categoria.toUpperCase()}
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    {product.nombre}
                  </h2>
                  <div className="flex items-center justify-between mt-1">
                    <p className="text-gray-900">${product.precio}</p>
                    <button
                      className="text-white bg-indigo-500 border-0 py-2 px-2 mr-4 mb-4 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                      onClick={() => handleAddToCart(product.id_producto)}
                    >
                      <FontAwesomeIcon icon={faShoppingCart} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Coches;
