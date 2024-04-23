import React from "react";

const Home: React.FC = () => {
  return (
    <>
    {/* Tarjetas */}

    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          <div className="p-4 lg:w-1/3">
            <div className="relative">
              <div className="h-full bg-opacity-75 px-8 pt-8 pb-24 rounded-lg overflow-hidden text-center relative text-white" style={{ backgroundImage: `url('./public/img/fondo_bebe.jpg')`, backgroundSize: 'cover' }}>
                <div className="absolute inset-0 bg-gray-900 bg-opacity-25"></div> {/* Capa de fondo con opacidad */}
                <a href="#">
                  <h2 className="tracking-widest text-xs title-font font-medium text-white mb-1 relative z-10">NUEVO</h2>
                  <h1 className="title-font sm:text-2xl text-xl font-medium text-white mb-3 relative z-10">Articulos Nuevos para tu bebe</h1>
                  <p className="leading-relaxed mb-3 relative z-10">Ingresa aqui para ver nuestro catalogo y ver los mejores articulos de primera</p>
                </a>
                <a className="text-white inline-flex items-center relative z-10" href="#" style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)' }}>Saber mas
                  <svg className="w-4 h-4 ml-2 " viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/3">
            <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-8 pb-24 rounded-lg overflow-hidden text-center relative" style={{ backgroundImage: `url('./public/img/fondo_bebe_niña.jpg')`, backgroundSize: 'cover' }}>
              <div className="absolute inset-0 bg-gray-900 bg-opacity-25"></div> {/* Capa de fondo con opacidad */}
              <a href="#">
                <h2 className="tracking-widest text-xs title-font font-medium text-white mb-1 relative z-10">USADO</h2>
                <h1 className="title-font sm:text-2xl text-xl font-medium text-white mb-3 relative z-10">Articulos Usados para tu bebe</h1>
                <p className="leading-relaxed mb-3 relative z-10 text-white">Ingresa aqui para ver nuestro catalogo y ver los mejores articulos de segunda.</p>
              </a>
              <a className="text-white inline-flex items-center relative z-10" href="#" style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)' }}>Saber mas
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="p-4 lg:w-1/3">
            <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-8 pb-24 rounded-lg overflow-hidden text-center relative text-white" style={{ backgroundImage: `url('./public/img/donaciones.jpg')`, backgroundSize: 'cover' }}>
              <div className="absolute inset-0 bg-gray-900 bg-opacity-25"></div> {/* Capa de fondo con opacidad */}
              <a href="#">
                <h2 className="tracking-widest text-xs title-font font-medium text-white mb-1 relative z-10">VENDE A LA PAGINA</h2>
                <h1 className="title-font sm:text-2xl text-xl font-medium text-white mb-3 relative z-10">Muestranos tus articulos</h1>
                <p className="leading-relaxed mb-3 relative z-10">Ingresa aqui y registrate para poder ofrecernos tus articulos de segunuda</p>
              </a>
              <a className="text-white inline-flex items-center relative z-10" href="#" style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)' }}>Saber mas
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* SESION COMUNIDAD */}
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto flex flex-wrap -m-12">
        <div className="p-12 md:w-1/2 flex flex-col items-start">
          <a href=""><span className="inline-block py-1 px-2 rounded bg-indigo-50 text-cyan-950 text-xs font-medium tracking-widest">Comunidad</span></a>
          <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">Pertenece a nuestra comunidad y enterate de las mejores donaciones</h2>
          <p className="leading-relaxed text-black text-justify mb-8">Incribete en nuestra pagina y has parte de nuestra comunidad, aqui podras mostrar los articulos de bebe que ya no necesites para que otros miembros de nuestra comunidad puedan recibirlos en donacion. Esto nos ayuda a aportar con el cuidado del medio ambiente</p>
          <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
            <a className="text-cyan-950 inline-flex items-center" href="#">Saber mas
              <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
        {/* Tarjeta sesion comunidad */}
        <div className="p-4 d:w-1/2 lg:w-1/2 lg:ml-auto">
          <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 overflow-hidden text-center relative" style={{ backgroundImage: `url('./public/img/manito_bebe.jpg')`, backgroundSize: 'cover' }}>
            <h2 className="tracking-widest text-xs title-font font-medium text-cyan-950 mb-1 relative z-10">COMUNIDAD</h2>
            <h1 className="title-font sm:text-2xl text-xl font-medium text-cyan-950 mb-3 relative z-10">Articulos Usados para tu bebe</h1>
            <p className="leading-relaxed mb-3 relative z-10 text-cyan-950">Ingresa y has parte de nuestra comunidad Querapidocrecen.com</p>
          </div>
        </div>
      </div>
    </section>
    {/* Seccion Imagenes */}
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex w-full mb-20 flex-wrap">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">Aqui podras encontrar todo lo relacionado con tu bebe</h1>
          <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-black">Aportamos a la conservacion del medio ambiente con la comercializacion de articulos de segunda mano, no lo pienses mas para ver nuestro catalogo.</p>
        </div>
        <div className="flex flex-wrap md:-m-2 -m-1">
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-1/2">
              <a href="#">
                <img alt="gallery" className="w-full object-cover h-full object-center block" src="./public/img/gym.jpg" />
              </a>
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <a href="#">
                <img alt="gallery" className="w-full object-cover h-full object-center block" src="./public/img/ropita.jpg" />
              </a>
            </div>
            <div className="md:p-2 p-1 w-full">
              <a href="#">
                <img alt="gallery" className="w-full h-full object-cover object-center block" src="./public/img/coche.jpg" />
              </a>
            </div>
          </div>
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-full">
              <a href="#">
                <img alt="gallery" className="w-full h-full object-cover object-center block" src="./public/img/bloques.jpg" />
              </a>
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <a href="#">
                <img alt="gallery" className="w-full object-cover h-full object-center block" src="./public/img/peluches.jpg" />
              </a>
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <a href="#">
                <img alt="gallery" className="w-full object-cover h-full object-center block" src="./public/img/cunas.jpg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

  </>
)
}

export default Home;
