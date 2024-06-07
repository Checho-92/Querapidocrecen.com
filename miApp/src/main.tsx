// main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppRouter } from './router/AppRouter';
import Home from './pages/home';
import Login from './pages/Login';
import Registro from './pages/registro';
import Coches from './pages/coches';
import Carrito from './pages/carrito';
import Comunidad from './pages/comunidad';
import { UserProvider } from './context/UserContext';
import { CartProvider } from './context/CartContext';
import './index.css';

const router = createBrowserRouter([
  {
    element: <AppRouter />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/registro',
        element: <Registro />,
      },
      {
        path: '/coches',
        element: <Coches />,
      },
      {
        path: '/carrito',
        element: <Carrito />,
      },
      {
        path: '/comunidad',
        element: <Comunidad />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UserProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </UserProvider>
  </React.StrictMode>
);
