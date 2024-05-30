import React, { createContext, useState, useContext, ReactNode } from 'react';

// Definimos la interfaz para el usuario
interface User {
  id: number;
  nombre: string;
}

// Definimos la interfaz para el contexto del usuario
interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
}

// Creamos el contexto del usuario
const UserContext = createContext<UserContextType | undefined>(undefined);

// Creamos el proveedor del contexto del usuario
export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    // Intentamos recuperar el usuario almacenado en localStorage
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook para usar el contexto del usuario
export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
