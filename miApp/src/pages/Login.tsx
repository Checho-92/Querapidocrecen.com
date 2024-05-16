import React from 'react';

const Login: React.FC = () => {
  return (
    <div className="px-4 py-8 min-h-screen flex flex-col items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url('./public/img/fondo_inicio.jpg')`}}>
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-6">
        <h1 className="text-4xl font-medium text-center mb-4">Login</h1>
        <p className="text-gray-500 text-center mb-6">Hola, Bienvenido 👋</p>

        <button className="w-full py-2 mb-6 border border-gray-300 rounded-lg flex items-center justify-center text-gray-700 hover:border-gray-400 hover:text-gray-900 hover:shadow-md transition duration-150">
          <img src="https://www.svgrepo.com/show/355037/google.svg" className="w-6 h-6 mr-2" alt="" />
          <span>Ingresa con Google</span>
        </button>

        <form className="mb-6">
          <label htmlFor="email" className="block mb-1">Correo</label>
          <input id="email" name="email" type="email" className="w-full mb-3 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 hover:shadow-md" placeholder="Enter email address" />

          <label htmlFor="password" className="block mb-1">Contraseña</label>
          <input id="password" name="password" type="password" className="w-full mb-3 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 hover:shadow-md" placeholder="Enter your password" />

          <div className="flex items-center justify-between mb-3">
            <label htmlFor="remember" className="flex items-center">
              <input type="checkbox" id="remember" className="w-4 h-4 border-gray-300 focus:bg-indigo-600" />
              <span className="ml-2 text-gray-700">Recuérdame</span>
            </label>
            <a href="#" className="text-indigo-600">¿Olvidaste tu contraseña?</a>
          </div>

          <button className="w-full py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-500 hover:shadow-md transition duration-150">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block mr-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
            </svg>
            <span>Login</span>
          </button>
        </form>

        <p className="text-center text-gray-700">
          ¿No tienes una cuenta?{' '}
          <a href="#" className="text-indigo-600 font-medium">
            Regístrate ahora
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block ml-1" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
