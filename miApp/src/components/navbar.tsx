import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBabyCarriage, faSocks, faBaby, faBicycle, faRecycle, faShirt, faCartShopping, faUser, faSearch, faCog } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';

const NavBar: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showConfigMenu, setShowConfigMenu] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const { user, setUser } = useUser();
  const [updatedUser, setUpdatedUser] = useState({ nombre: '', email: '', password: '' });
  const [alertMessage, setAlertMessage] = useState<string>('');
  const configMenuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (configMenuRef.current && !configMenuRef.current.contains(event.target as Node)) {
        setShowConfigMenu(false);
      }
    };

    if (showConfigMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showConfigMenu]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleConfigMenu = () => {
    setShowConfigMenu(!showConfigMenu);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
  };

  const handleUpdateUser = async () => {
    if (!user) return;

    try {
      const response = await axios.put('http://localhost:3000/api/user/update-user', {
        id_usuario: user.id,
        nombre: updatedUser.nombre || user.nombre,
        email: updatedUser.email || user.correo,
        password: updatedUser.password || user.password
      });
      if (response.status === 200) {
        setUser({ ...user, nombre: updatedUser.nombre || user.nombre, correo: updatedUser.email || user.correo });
        setAlertMessage('Usuario actualizado correctamente');
      }
    } catch (error) {
      console.error('Error al actualizar el usuario:', error);
      setAlertMessage('Error al actualizar el usuario');
    } finally {
      setShowUpdateModal(false);
    }
  };

  const handleDeleteAccount = async () => {
    if (!user) return;
    // Confirmación antes de eliminar la cuenta
    const confirmDelete = window.confirm('¿Estás seguro de que deseas eliminar tu cuenta? Esta acción no se puede deshacer.');

    if (!confirmDelete) return;

    try {
      const response = await axios.delete(`http://localhost:3000/api/user/delete-user/${user.id}`);
      if (response.status === 200) {
        alert('Cuenta eliminada correctamente');
        handleLogout();
        navigate('/');
      }
    } catch (error) {
      console.error('Error al eliminar la cuenta:', error);
      alert('Error al eliminar la cuenta');
    }
  };

  return (
    <>
      <header className={`text-gray-600 z-50 body-font bg-cyan-600 shadow-lg shadow-cyan-600/50 ${isSticky ? 'sticky' : ''}`}>
        <div className="container mx-auto flex flex-wrap items-center justify-between p-5">
          <Link to='/' className="flex title-font font-medium items-center text-gray-900">
            <span className="mr-5 ml-5 text-xl text-white">Querapidocrecen.com</span>
          </Link>
          <nav className={`md:flex md:items-center md:space-x-10 ${showMenu ? 'block' : 'hidden'}`}>
            <Link to='/' className="text-white hover:text-terciary cursor-pointer">Inicio</Link>
            <a className="text-white hover:text-terciary cursor-pointer" onClick={toggleMenu}>Productos</a>
            <Link to='/comunidad' className="text-white hover:text-terciary cursor-pointer">Comunidad</Link>
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
            <Link to='/carrito' className="text-white hover:text-terciary cursor-pointer"><FontAwesomeIcon icon={faCartShopping} /></Link>
            {user ? (
              <div className="ml-4 mr-5 text-white flex items-center relative" ref={configMenuRef}>
                <span>Hola {user.nombre}</span>
                <button onClick={toggleConfigMenu} className="ml-4 relative">
                  <FontAwesomeIcon icon={faCog} />
                  {showConfigMenu && (
                    <div className="absolute z-50 right-0 mt-2 w-48 bg-cyan-600 border border-gray-300 rounded-md shadow-lg">
                      <button onClick={() => { setShowUpdateModal(true); setShowConfigMenu(false); }} className="block w-full text-left px-4 py-2 text-white hover:bg-cyan-500 border border-gray-300">Actualizar</button>
                      <button onClick={handleDeleteAccount} className="block px-4 py-2 text-left text-white hover:bg-cyan-500 border border-gray-300">Eliminar cuenta</button>
                      <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-white hover:bg-cyan-500 border border-gray-300">Salir</button>
                    </div>
                  )}
                </button>
              </div>
            ) : (
              <Link to='/login' className="text-white hover:text-terciary cursor-pointer ml-4 mr-5">
                <FontAwesomeIcon icon={faUser} />
              </Link> 
            )}
          </div>
          <button className="md:hidden text-white focus:outline-none" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} className="text-2xl" />
          </button>
        </div>
      </header>
      {showMenu && (
        <nav className={`fixed w-full z-50 text-gray-600 body-font bg-cyan-600 shadow-lg shadow-cyan-600/50 ${isSticky ? 'sticky' : ''}`}>
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <ul className="md:flex md:ml-auto md:mr-auto md:flex-wrap md:items-center md:text-base md:justify-start">
              <li><Link to='/coches' className="block inline-block py-1 text-white hover:text-terciary cursor-pointer mr-10"><FontAwesomeIcon icon={faBabyCarriage} className='mr-2'/> Coches</Link></li>
              <li><a className="block inline-block py-1 text-white hover:text-terciary cursor-pointer mr-10" href="#"><FontAwesomeIcon icon={faBaby} className='mr-2'/> Corrales</a></li>
              <li><a className="block inline-block py-1 text-white hover:text-terciary cursor-pointer mr-10" href="#"><FontAwesomeIcon icon={faBicycle} className='mr-2'/> Articulos</a></li>
              <li><a className="block inline-block py-1 text-white hover:text-terciary cursor-pointer mr-10" href="#"><FontAwesomeIcon icon={faRecycle} className='mr-2'/> Ropa usada</a></li>
              <li><a className="block inline-block py-1 text-white hover:text-terciary cursor-pointer mr-10" href="#"><FontAwesomeIcon icon={faShirt} className='mr-2'/> Ropa nueva</a></li>
              <li><a className="block inline-block py-1 text-white hover:text-terciary cursor-pointer mr-10" href="#"><FontAwesomeIcon icon={faSocks} className='mr-2'/> Zapatos</a></li>
            </ul>
          </div>
        </nav>
      )}
      {showUpdateModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-8 shadow-lg w-96">
            <h2 className="text-2xl mb-4">Actualizar información</h2>
            {alertMessage && (
              <div className="mb-4 p-4 text-white bg-green-500 rounded">
                {alertMessage}
              </div>
            )}
            <label className="block mb-2">
              Nombre de usuario:
              <input
                type="text"
                value={updatedUser.nombre}
                onChange={(e) => setUpdatedUser({ ...updatedUser, nombre: e.target.value })}
                className="w-full mt-1 p-2 border rounded"
              />
            </label>
            <label className="block mb-2">
              Correo electrónico:
              <input
                type="email"
                value={updatedUser.email}
                onChange={(e) => setUpdatedUser({ ...updatedUser, email: e.target.value })}
                className="w-full mt-1 p-2 border rounded"
              />
            </label>
            <label className="block mb-4">
              Nueva contraseña:
              <input
                type="password"
                value={updatedUser.password}
                onChange={(e) => setUpdatedUser({ ...updatedUser, password: e.target.value })}
                className="w-full mt-1 p-2 border rounded"
              />
            </label>
            <div className="flex justify-end">
              <button onClick={() => setShowUpdateModal(false)} className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded mr-2">Cancelar</button>
              <button onClick={handleUpdateUser} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Guardar</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
