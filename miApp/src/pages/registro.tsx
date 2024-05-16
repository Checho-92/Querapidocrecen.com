import React from 'react';

const Registro: React.FC = () => {
  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: `url('./public/img/fondo_inicio.jpg')`}}>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md p-6">
          <h3 className="text-2xl text-center mb-4">Regístrate</h3>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="firstName">
                  Nombres
                </label>
                <input className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="firstName" type="text" placeholder="First Name" />
              </div>
              <div>
                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="lastName">
                  Apellidos
                </label>
                <input className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="lastName" type="text" placeholder="Last Name" />
              </div>
            </div>
            <div>
              <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
                Email
              </label>
              <input className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" />
            </div>
            <div>
              <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
                Contraseña
              </label>
              <input className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="**********" />
            </div>
            <div>
              <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="c_password">
                Confirmar Contraseña
              </label>
              <input className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="c_password" type="password" placeholder="**********" />
            </div>
            <button className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline" type="button">
              Registrar cuenta
            </button>
          </form>
          <hr className="border-t" />
          <div className="text-center ">
            <a className="text-sm text-blue-500 hover:text-blue-800" href="#">
              ¿Olvidaste tu contraseña?
            </a>
          </div>
          <div className="text-center">
            <a className="text-sm text-blue-500 hover:text-blue-800" href="#">
              ¿Ya tienes una cuenta? Inicia sesión
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registro;
