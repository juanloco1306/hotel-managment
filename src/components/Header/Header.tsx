'use client';

import Link from 'next/link';
import { useContext } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md';
import { useSession } from 'next-auth/react';

import ThemeContext from '@/context/themeContext';
import Image from 'next/image';

const Header = () => {
  const { darkTheme, setDarkTheme } = useContext(ThemeContext);

  const { data: session } = useSession();

  return (
    <header className='py-10 px-4 container mx-auto text-xl flex flex-wrap md:flex-nowrap items-center justify-between'>
      <div className='flex items-center w-full md:2/3'>
        <Link href='/' className='font-black text-tertiary-dark'>
          Hotelzz
        </Link>
        <ul className='flex items-center ml-5'>
          <li className='flex items-center'>
            {session?.user ? (
              <Link href={`/users/${session.user.id}`}>
                {session.user.image ? (
                  <div className='w-10 h-10 rounded-full overflow-hidden'>
                    <Image
                      src={session.user.image}
                      alt={session.user.name!}
                      width={40}
                      height={40}
                      className='scale-animation img'
                    />
                  </div>
                ) : (
                  <FaUserCircle className='cursor-pointer' />
                )}
              </Link>
            ) : (
              <Link href='/auth'>
                <FaUserCircle className='cursor-pointer' />
              </Link>
            )}
          </li>
          <li className='ml-2'>
            {darkTheme ? (
              <MdOutlineLightMode
                className='cursor-pointer'
                onClick={() => {
                  setDarkTheme(false);
                  localStorage.removeItem('hotel-theme');
                }}
              />
            ) : (
              <MdDarkMode
                className='cursor-pointer'
                onClick={() => {
                  setDarkTheme(true);
                  localStorage.setItem('hotel-theme', 'true');
                }}
              />
            )}
          </li>
        </ul>
      </div>

      <ul className='flex items-center justify-between w-full md:w-1/3 mt-4'>
        <li className='hover:-translate-y-2 duration-500 transition-all'>
          <Link href='/'>Home</Link>
        </li>
        <li className='hover:-translate-y-2 duration-500 transition-all'>
          <Link href='/rooms'>Rooms</Link>
        </li>
        <li className='hover:-translate-y-2 duration-500 transition-all'>
          <Link href='/'>Contact</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;

/**
 * 
 * 1.- const { darkTheme, setDarkTheme } = useContext(ThemeContext);
 * 
 * El hook useContext se utiliza para acceder al valor actual del contexto ThemeContext. useContext toma el contexto como argumento y devuelve el valor actual del contexto.
 * 
 * La desestructuración se utiliza para extraer las propiedades específicas del objeto retornado por useContext. En este caso, darkTheme y setDarkTheme son las propiedades que se extraen del objeto que representa el valor del contexto.

darkTheme: Representa el estado actual del tema (oscuro o claro).
setDarkTheme: Representa la función que se utiliza para cambiar el estado del tema.
Por lo tanto, esta línea de código se utiliza para obtener el estado actual del tema (darkTheme) y la función para cambiar 
el tema (setDarkTheme) desde el contexto ThemeContext. Estos valores se pueden utilizar en el componente actual para realizar acciones basadas en el tema, como aplicar estilos condicionales o gestionar la lógica relacionada con el tema de la aplicación

2.- Operador ternario (? :): 
{darkTheme ? (
  // Contenido si darkTheme es true
) : (
  // Contenido si darkTheme es false
)}
El operador ternario se utiliza para renderizar un componente diferente en función del valor de darkTheme. Si darkTheme es true, se renderiza el componente <MdOutlineLightMode>, y si es false, se renderiza el componente <MdDarkMode>.

Para MdOutlineLightMode (modo claro): Cuando se hace clic en el ícono de modo claro, se ejecuta la función proporcionada en el evento onClick. Esta función cambia el estado del tema a false utilizando setDarkTheme(false), lo que indica que el tema ahora es claro. Además, elimina cualquier entrada relacionada con el tema en el localStorage

Para MdDarkMode (modo oscuro): Cuando se hace clic en el ícono de modo oscuro, se ejecuta la función proporcionada en el evento onClick. Esta función cambia el estado del tema a true utilizando setDarkTheme(true), indicando que el tema ahora es oscuro. También guarda esta información en el localStorage con la clave 'hotel-theme' y el valor 'true'

En resumen, este bloque de código proporciona una interfaz visual para cambiar entre los modos claro y oscuro y utiliza el contexto ThemeContext para actualizar el estado del tema y almacenar esa información en el localStorage para persistencia entre sesiones.

3.- El código que proporcionaste utiliza el hook useSession de NextAuth para obtener información sobre la sesión del usuario en un componente de React. 

Utiliza el hook useSession proporcionado por NextAuth para obtener información sobre la sesión del usuario. 
La desestructuración { data: session } se utiliza para extraer la propiedad data del resultado del hook y asignarla a la variable session.

session: Contiene información sobre la sesión del usuario

4.- Condición de la sesión del usuario:

{session?.user ? (
  // Código si el usuario está autenticado
) : (
  // Código si el usuario no está autenticado
)}

Utiliza la condición ternaria para verificar si session?.user existe, lo que indica que el usuario está autenticado. Si es verdadero, renderiza el bloque de código dentro del primer par de paréntesis. Si es falso, renderiza el bloque de código dentro del segundo par de paréntesis.

Enlace condicional para usuarios autenticados:

<Link href={`/users/${session.user.id}`}>
  {session.user.image ? (
    // Renderiza la imagen del usuario si está disponible
  ) : (
    // Renderiza el icono predeterminado si la imagen del usuario no está disponible
  )}
</Link>

Si el usuario está autenticado, utiliza el componente Link de Next.js para crear un enlace a la página del perfil del usuario (/users/${session.user.id}). Dependiendo de si la imagen del usuario (session.user.image) está disponible o no, renderiza la imagen del usuario o un icono predeterminado (FaUserCircle).

Si el usuario no está autenticado, utiliza el componente Link para crear un enlace a la página de autenticación (/auth). Renderiza el icono predeterminado (FaUserCircle) como contenido del enlace.
 */