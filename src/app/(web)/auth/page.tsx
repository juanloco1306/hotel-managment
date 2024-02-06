'use client';

import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { signUp } from 'next-auth-sanity/client';
import { signIn, useSession } from 'next-auth/react';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const defaultFormData = {
  email: '',
  name: '',
  password: '',
};

const Auth = () => {
  const [formData, setFormData] = useState(defaultFormData);

  const inputStyles =
    'border border-gray-300 sm:text-sm text-black rounded-lg block w-full p-2.5 focus:outline-none';

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) router.push('/');
  }, [router, session]);

  const loginHandler = async () => {
    try {
      await signIn();
      router.push('/');
    } catch (error) {
      //console.log(error);
      toast.error("Something wen't wrong");
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const user = await signUp(formData);
      if (user) {
        toast.success('Success. Please sign in');
      }
    } catch (error) {
      //console.log(error);
      toast.error("Something wen't wrong");
    } finally {
      setFormData(defaultFormData);
    }
  };

  return (
    <section className='container mx-auto'>
      <div className='p-6 space-y-4 md:space-y-6 sm:p-8 w-80 md:w-[70%] mx-auto'>
        <div className='flex mb-8 flex-col md:flex-row items-center justify-between'>
          <h1 className='text-xl font-bold leading-tight tracking-tight md:text-2xl'>
            Create an account
          </h1>
          <p>OR</p>
          <span className='inline-flex items-center'>
            <AiFillGithub
              onClick={loginHandler}
              className='mr-3 text-4xl cursor-pointer text-black dark:text-white'
            />{' '}
            |
            <FcGoogle
              onClick={loginHandler}
              className='ml-3 text-4xl cursor-pointer'
            />
          </span>
        </div>

        <form className='space-y-4 md:space-y-6' onSubmit={handleSubmit}>
          <input
            type='email'
            name='email'
            placeholder='name@company.com'
            required
            className={inputStyles}
            value={formData.email}
            onChange={handleInputChange}
          />
          <input
            type='text'
            name='name'
            placeholder='John Doe'
            required
            className={inputStyles}
            value={formData.name}
            onChange={handleInputChange}
          />
          <input
            type='password'
            name='password'
            placeholder='password'
            required
            minLength={6}
            className={inputStyles}
            value={formData.password}
            onChange={handleInputChange}
          />

          <button
            type='submit'
            className='w-full bg-tertiary-dark focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center'
          >
            Sign Up
          </button>
        </form>

        <button onClick={loginHandler} className='text-blue-700 underline'>
          login
        </button>
      </div>
    </section>
  );
};

export default Auth;

/**
 * 
 * 1.- defaultFormData objeto:
Se crea un objeto llamado defaultFormData que tiene tres propiedades: email, name, y password. Cada propiedad está inicializada con una cadena vacía. Este objeto se utiliza como el valor inicial del estado formData.

formData: Es una variable de estado que almacena el estado actual del formulario. Inicialmente se establece con el valor de defaultFormData.
setFormData: Es la función que se utiliza para actualizar el estado de formData. Se llama con el nuevo estado, y React se encarga de hacer la actualización.

2.- La función handleInputChange es un manejador de eventos que se utiliza para gestionar los cambios en los campos de un formulario

La función toma un parámetro event, que se espera que sea un evento de cambio (ChangeEvent) en un elemento de entrada (HTMLInputElement). Esto generalmente se utiliza en el contexto de formularios, donde se espera que los usuarios interactúen con campos de entrada.

Destructura el objeto target del evento para obtener las propiedades name y value. name representa el atributo name del campo de entrada, y value representa el valor actual del campo de entrada. Estos valores se utilizan para actualizar el estado del formulario.

Utiliza la función setFormData para actualizar el estado del formulario (formData). Se utiliza la propagación de propiedades (...formData) para copiar todas las propiedades existentes del estado actual. Luego, se sobrescribe la propiedad identificada por el nombre del campo ([name]) con el nuevo valor (value). Esto asegura que el estado del formulario se actualice correctamente con la nueva información del campo que ha cambiado

En resumen, handleInputChange se utiliza para manejar eventos de cambio en los campos de un formulario, extrayendo la información relevante del evento y actualizando el estado del formulario en consecuencia. Este tipo de función es comúnmente utilizada en componentes de formularios en React para mantener el estado sincronizado con la entrada del usuario.

3.- El hook useSession es parte de algún paquete o biblioteca específica que maneja la gestión de sesiones en una aplicación React. La desestructuración const { data: session } se utiliza para extraer la propiedad data del resultado del hook y asignarla a la variable session. Este patrón es común cuando un hook devuelve un objeto con múltiples propiedades, y solo estás interesado en una de ellas.

session: Contiene los datos relacionados con la sesión del usuario, que pueden incluir información sobre la autenticación, el usuario actual, etc.

El hook useRouter se utiliza para obtener el objeto router que proporciona información sobre la ruta actual de la aplicación y también tiene métodos para navegar entre las diferentes rutas.

router: Es un objeto que contiene información sobre la ruta actual y proporciona métodos para la navegación.

4.- useEffect se utiliza para realizar operaciones secundarias después de que el componente se ha montado en el DOM. 

El segundo argumento del useEffect es un array de dependencias, y el código dentro del useEffect se ejecutará cada vez que alguna de estas dependencias cambie.

En este caso, si la variable session es verdadera (lo que generalmente indica que el usuario está autenticado), se utiliza el método push del objeto router para redirigir a la ruta '/'. Es decir, si el usuario está autenticado, será redirigido a la página principal

Se especifica [router, session] como dependencias del useEffect. Esto significa que el código dentro del useEffect se ejecutará cada vez que router o session cambien. Si alguno de estos cambia, el useEffect se dispara y realiza la redirección.

5.- La función loginHandler es un manejador de eventos que parece estar diseñado para manejar el proceso de inicio de sesión.

Utiliza la función signIn, que parece ser una función asíncrona, para intentar iniciar sesión. 

Si el inicio de sesión es exitoso (sin lanzar excepciones), utiliza el objeto router para realizar una redirección a la ruta principal ('/'). Esto significa que después de un inicio de sesión exitoso, el usuario será redirigido a la página principal de la aplicación.

Si el inicio de sesión falla y se lanza una excepción, el código en el bloque catch se ejecutará. En este caso, se imprime el error en la consola y se muestra una notificación de error utilizando toast.error.

6.- La función handleSubmit parece ser un manejador de eventos utilizado para procesar el envío de un formulario. 

Utiliza event.preventDefault() para evitar que el formulario se envíe de manera predeterminada, lo que es común en los manejadores de eventos de formularios en React.

Utiliza la función signUp para intentar realizar la acción de registro utilizando los datos del formulario (formData). Es probable que signUp sea una función asíncrona que se encargue de enviar los datos del formulario al servidor para procesar el registro del usuario

Si el registro es exitoso (la variable user tiene un valor), muestra un mensaje de éxito utilizando toast.success.

El bloque finally se ejecuta independientemente de si el intento de registro es exitoso o falla. En este caso, se utiliza setFormData para restablecer el estado del formulario a su valor inicial (defaultFormData). Esto garantiza que el formulario esté listo para otro intento de registro o para nuevos datos.

 */