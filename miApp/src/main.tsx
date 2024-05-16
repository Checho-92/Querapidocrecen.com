import React from 'react';
import ReactDOM  from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
{/*import App from './App';*/}
import { AppRouter } from './router/AppRouter';
import Home from './pages/home';
import Login from './pages/Login';
import './index.css';
import Registro from './pages/registro';
import Productos from './pages/productos';
import Carrito from './pages/carrito';
import Comunidad from './pages/comunidad';

const router = createBrowserRouter([

{element:<AppRouter/>,
  children:[
    {
      path: '/',
      element: <Home/>,
    },
    {
      path: '/login',
      element: <Login/>,
    },
    {
      path: '/registro',
      element: <Registro/>,
    },
    {
      path: '/productos',
      element: <Productos/>,
    },
    {
      path: '/carrito',
      element: <Carrito/>,
    },
    {
      path: '/comunidad',
      element: <Comunidad/>,
    }
  ]
}
]);


ReactDOM.createRoot(document.getElementById('root')!).render( 
  <React.StrictMode>
  
    <RouterProvider router={router}/>
    
  </React.StrictMode>
);
