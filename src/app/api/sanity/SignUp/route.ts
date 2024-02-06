import { signUpHandler } from 'next-auth-sanity';

import sanityClient from '@/libs/sanity';

export const POST = signUpHandler(sanityClient);

/**
 * Importa la función signUpHandler del paquete next-auth-sanity. Esta función es un controlador de solicitud que maneja el registro de usuarios en la base de datos
 * 
 * Importa el cliente Sanity desde el archivo sanity.js ubicado en el directorio libs del proyecto. Este cliente se utilizará para interactuar con la base de datos de Sanity y almacenar la información del usuario durante el proceso de registro.
 * 
 * Utiliza la función signUpHandler importada para crear un controlador de solicitud POST llamado POST. Este controlador está configurado para manejar la solicitud de registro de usuarios y utilizar el cliente Sanity proporcionado para almacenar la información del usuario en la base de datos.
 * 
 */