import React from 'react';

const Registro: React.FC = () => {
  return (
    <>
    <div className=" h-5/6 py-2 " style={{ backgroundImage: `url('./public/img/fondo_inicio.jpg')`, backgroundSize: '', height: '100vh'}}>
      {/* Container */}
      <div className="container mx-auto w-4/5 " >
        <div className="flex justify-center px-6 my-8">
          {/* Row */}
          <div className="w-4/5 lg:w-3/4 flex">
            {/* Col */}
            <div className="w-11/12 h-5/6 bg-white p-2 border-2 rounded mt-4 mb-2 mb-16 ml-8 text-center">
              <h3 className="pt-1 text-2xl text-center">Registrate</h3>
              <form className="px-4 sm:px-8 pt-4 pb-4 mb-4 bg-white rounded w-11/12 h-5/6 ml-8 ">
                <div className="mb-2 md:flex md:justify-between ">
                  <div className="mb-4 md:mr-2 md:mb-0 w-full sm:w-1/2">
                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="firstName">
                      Nombres
                    </label>
                    <input className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="firstName" type="text" placeholder="First Name" />
                  </div>
                  <div className="md:ml-2 sm:w-1/2">
                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="lastName">
                      Apellidos
                    </label>
                    <input className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="lastName" type="text" placeholder="Last Name" />
                  </div>
                </div>
                <div className="mb-2">
                  <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
                    Email
                  </label>
                  <input className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" />
                </div>
                <div className="mb-2 md:flex md:justify-between">
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
                      Contraceña
                    </label>
                    <input className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                    <p className="text-xs italic text-red-500">Please choose a password.</p>
                  </div>
                  <div className="md:ml-2">
                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="c_password">
                      Confirmar Contraceña
                    </label>
                    <input className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="c_password" type="password" placeholder="******************" />
                  </div>
                </div>
                <div className="mb-2 text-center">
                  <button className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline" type="button">
                    Registrar cuenta
                  </button>
                </div>
                <hr className="mb-0 border-t" />
                <div className="text-center ">
                  <a className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800" href="#">
                    Olvido su contraceña?
                  </a>
                </div>
                <div className="text-center mb-8">
                  <a className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800 " href="#">
                    Ahora ya tiene una cuenta? Login!
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Registro;
