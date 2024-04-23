import React from 'react';

const Login: React.FC = () => {
  return (
    <div className=" px-8 pt-8 pb-12 rounded-lg antialiased min-h-screen flex items-center justify-center" style={{ backgroundImage: `url('./public/img/fondo_inicio.jpg')`, backgroundSize: '', height: ''}}>
      <div className="max-w-lg mx-auto w-3/5 bg-white p-6 rounded-xl shadow shadow-slate-300" style={{ height: '500px' }}>
        <h1 className="text-4xl font-medium text-center">Login</h1>
        <p className="text-slate-500">Hola, Bienvenido 👋</p>

        <div className="my-5">
          <button style={{ marginBottom: '-2rem' }} className="w-full text-center py-2 my-2 border flex space-x-2 items-center justify-center border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
            <img src="https://www.svgrepo.com/show/355037/google.svg" className="w-6 h-6" alt="" />
            <span>Ingresa con Google</span>
          </button>
        </div>

        <form className="my-10 mb-2 ">
          <div className="flex flex-col space-y-5 ">
            <label htmlFor="email">
              <p className="font-medium text-slate-700 pb-0 mb-0 mt-0">Correo</p>
              <input id="email" name="email" type="email" className="w-full mb-0 py-2 my-2 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter email address" />
            </label>
            <label htmlFor="password">
              <p className="font-medium text-slate-700 pb-0 mb-0 mt-0">Contraceña</p>
              <input id="password" name="password" type="password" className="w-full mb-0 py-2 my-2  border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter your password" />
            </label>
            <div className="flex flex-row justify-between">
              <div>
                <label htmlFor="remember" className="">
                  <input type="checkbox" id="remember" className="w-4 h-4 border-slate-200 focus:bg-indigo-600" />
                  Recuerdame
                </label>
              </div>
              <div>
                <a href="#" className="font-medium text-indigo-600">Olvidaste tu contraceña?</a>
              </div>
            </div>
            <button className="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
              </svg>
              <span>Login</span>
            </button>
            <p className="text-center">No tienes Registro? <a href="#" className="text-indigo-600 font-medium inline-flex space-x-1 items-center"><span>Registrate ahora </span><span><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg></span></a></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;