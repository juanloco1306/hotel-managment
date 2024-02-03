'use client';


import Link from "next/link"
import { FaUserCircle } from 'react-icons/fa';
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md';
import ThemeContext from "../../context/themeContext";
import { useContext } from "react";

const Header = () => {
    const { darkTheme, setDarkTheme } = useContext(ThemeContext)
    return (
        <header className='py-10 px-4 container mx-auto text-xl flex flex-wrap md:flex-nowrap items-center justify-between'>
            <div className='flex items-center w-full md:2/3'>
                <Link href='/' className="font-black text-tertiary-dark">
                    Hotelzz
                </Link>
                <ul className='flex items-center ml-5'>
                    <li className='flex items-center'>
                        <Link href='/auth'>
                            <FaUserCircle className='cursor-pointer'/>
                        </Link>
                    </li>
                    <li className='ml-2'>
                        {darkTheme ? (
                            <MdOutlineLightMode
                            className="cursor-pointer"
                            onClick={() => {
                                setDarkTheme(false);
                                localStorage.removeItem('hotel-theme');
                            }}
                            />
                        ): (
                            <MdDarkMode
                            className="cursor-pointer"
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
                    <Link href='/contact'>Contact</Link>
                </li>
            </ul>
        </header>
    )
}

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


 */