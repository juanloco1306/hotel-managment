'use client';

import { useEffect, useState } from 'react';

import ThemeContext from '@/context/themeContext';

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const themeFromStorage: boolean =
    typeof localStorage !== 'undefined' && localStorage.getItem('hotel-theme')
      ? JSON.parse(localStorage.getItem('hotel-theme')!)
      : false;

  const [darkTheme, setDarkTheme] = useState<boolean>(themeFromStorage);
  const [renderComponent, setRenderComponent] = useState(false);

  useEffect(() => {
    setRenderComponent(true);
  }, []);

  if (!renderComponent) return <></>;

  return (
    <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
      <div className={`${darkTheme ? 'dark' : ''} min-h-screen`}>
        <div className='dark:text-white dark:bg-black text-[#1E1E1E]'>
          {children}
        </div>
      </div>
    </ThemeContext.Provider>
      );
    };
    
    export default ThemeProvider;

/**
 * Importaciones: Importa las funciones useEffect y useState de React, así como el contexto de tema (ThemeContext) definido en el código anterior.
 * 
 * 1.- Definición del componente ThemeProvider: Define el componente ThemeProvider como una función que recibe un solo parámetro, children, que es de tipo React.ReactNode. Este componente envuelve su contenido con el contexto de tema.
 * 
 * 2.- Obtención del tema desde el almacenamiento local: Intenta obtener el tema almacenado en el localStorage. Si encuentra un tema almacenado, lo convierte de cadena a booleano utilizando JSON.parse. Si no encuentra un tema almacenado, establece false como valor predeterminado.
 * 
 * 3.- Estado del tema y renderización del componente: Utiliza el estado local para almacenar el tema (darkTheme) y un estado (renderComponent) que se utiliza para asegurarse de que el componente se renderice solo después de que el efecto useEffect se haya ejecutado una vez.
 * 
 * 4.- Renderizado condicional del componente: Si renderComponent es false, el componente devuelve un fragmento vacío (<> </>) para evitar el renderizado del contenido antes de que se haya completado el efecto useEffect.
 * 
 * 5.- Proveedor de contexto y contenido del componente: Si renderComponent es true, el componente devuelve el contenido envuelto en el proveedor de contexto (ThemeContext.Provider). Este proveedor proporciona el estado del tema (darkTheme) y la función para cambiarlo (setDarkTheme) a todos los componentes descendientes.

El componente utiliza clases condicionales para aplicar estilos dependiendo de si el tema es oscuro (darkTheme). Además, el contenido del componente (children) se renderiza dentro de un contenedor que aplica estilos específicos para el tema oscuro.
 * 
6.- En resumen, este código proporciona un componente ThemeProvider que gestiona el tema de la aplicación mediante el uso de un contexto de tema. Este componente utiliza el estado local para almacenar el tema, obtiene el tema desde el localStorage y proporciona el estado del tema a través del contexto a los componentes descendientes.

 */