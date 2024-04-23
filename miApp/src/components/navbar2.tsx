import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBabyCarriage, faSocks, faBaby, faBicycle, faRecycle, faShirt } from '@fortawesome/free-solid-svg-icons';

const NavBar2: React.FC = () => {
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
    <nav className={`fixed w-full z-50 text-gray-600 body-font bg-cyan-600 shadow-lg shadow-cyan-600/50 ${isSticky ? 'sticky' : ''}`}>
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <ul className={`md:flex md:ml-auto md:mr-auto md:flex-wrap md:items-center md:text-base md:justify-start ${showMenu ? 'block' : 'hidden md:block'}`}>
          <li><a className="block inline-block py-1 text-white hover:text-tertiary cursor-pointer mr-10" href="#"><FontAwesomeIcon icon={faBabyCarriage} className='mr-2'/> Coches</a></li>
          <li><a className="block inline-block py-1 text-white hover:text-tertiary cursor-pointer mr-10" href="#"><FontAwesomeIcon icon={faBaby} className='mr-2'/> Corrales</a></li>
          <li><a className="block inline-block py-1 text-white hover:text-tertiary cursor-pointer mr-10" href="#"><FontAwesomeIcon icon={faBicycle} className='mr-2'/> Articulos</a></li>
          <li><a className="block inline-block py-1 text-white hover:text-tertiary cursor-pointer mr-10" href="#"><FontAwesomeIcon icon={faRecycle} className='mr-2'/> Ropa usada</a></li>
          <li><a className="block inline-block py-1 text-white hover:text-tertiary cursor-pointer mr-10" href="#"><FontAwesomeIcon icon={faShirt} className='mr-2'/> Ropa nueva</a></li>
          <li><a className="block inline-block py-1 text-white hover:text-tertiary cursor-pointer mr-10" href="#"><FontAwesomeIcon icon={faSocks} className='mr-2'/> Zapatos</a></li>
        </ul>
        <form className="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
          <button className="md:hidden text-white focus:outline-none mr-4" onClick={() => setShowMenu(!showMenu)}>
            <FontAwesomeIcon icon={faBars} className="text-2xl" />
          </button>
          <div className="relative sm:w-64 w-40 sm:mr-4 mr-2 ">
            <input type="text" id="footer-field" name="footer-field" className="w-full  rounded border border-gray-300 focus:ring-2  focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700  px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
          <a href=""><svg className="h-8 w-8 text-white items-center"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="10" cy="10" r="7" />  <line x1="21" y1="21" x2="15" y2="15" /></svg></a>
        </form>
      </div>
    </nav>
  );
}

export default NavBar2;
