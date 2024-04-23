import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faUser, faBars, faSearch } from '@fortawesome/free-solid-svg-icons';

const NavBar: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header className={`text-gray-600  z-50 body-font bg-cyan-600 shadow-lg shadow-cyan-600/50 ${isSticky ? 'sticky' : ''}`}>
        <div className="container mx-auto flex flex-wrap items-center justify-between p-5">
          <a href='#' className="flex title-font font-medium items-center text-gray-900">
            <span className="mr-5 ml-5 text-xl text-white">Querapidocrecen.com</span>
          </a>
          <nav className={`md:flex md:items-center md:space-x-10 ${showMenu ? 'block' : 'hidden'}`}>
            <a className="text-white hover:text-terciary cursor-pointer">Inicio</a>
            <a className="text-white hover:text-terciary cursor-pointer">Productos</a>
            <a className="text-white hover:text-terciary cursor-pointer">Comunidad</a>
          </nav>
          <div className="flex items-center">
            <div className="relative mr-4">
              <input
                type="text"
                id="footer-field"
                name="footer-field"
                className="w-full rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Buscar..."
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <FontAwesomeIcon icon={faSearch} className="h-5 w-5 text-gray-400" />
              </div>
            </div>
            <a className="text-white hover:text-terciary cursor-pointer"><FontAwesomeIcon icon={faCartShopping} /></a>
            <a className="text-white hover:text-terciary cursor-pointer ml-4 mr-5"><FontAwesomeIcon icon={faUser} /></a>
          </div>
          <button className="md:hidden text-white focus:outline-none" onClick={() => setShowMenu(!showMenu)}>
            <FontAwesomeIcon icon={faBars} className="text-2xl" />
          </button>
        </div>
      </header>
    </>
  );
}

export default NavBar;
