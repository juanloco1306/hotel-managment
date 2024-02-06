import { NextAuthOptions } from 'next-auth';
import { SanityAdapter, SanityCredentials } from 'next-auth-sanity';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';

import sanityClient from './sanity';

export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    SanityCredentials(sanityClient),
  ],
  session: {
    strategy: 'jwt',
  },
  adapter: SanityAdapter(sanityClient),
  debug: process.env.NODE_ENV === 'development',
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    session: async ({ session, token }) => {
      const userEmail = token.email;
      const userIdObj = await sanityClient.fetch<{ _id: string }>(
        `*[_type == "user" && email == $email][0] {
            _id
        }`,
        { email: userEmail }
      );
      return {
        ...session,
        user: {
          ...session.user,
          id: userIdObj._id,
        },
      };
    },
  },
};

/**
 * El código que proporcionaste configura opciones para la autenticación con NextAuth en una aplicación.
 * 
 * Configura proveedores de autenticación para GitHub, Google y Sanity. Los clientes de GitHub y Google se autentican con sus respectivos ID de cliente y secretos.
 *  Además, se incluye un proveedor personalizado SanityCredentials que utiliza sanityClient configurado anteriormente.
 * 
 * Configura la estrategia de sesión como 'jwt' (JSON Web Token).
 * 
 * Utiliza el adaptador de sesión SanityAdapter para almacenar y recuperar información de sesión utilizando el cliente Sanity.
 * 
 * Configura el modo de depuración basado en el entorno. En desarrollo (NODE_ENV === 'development'), se activa el modo de depuración
 * 
 * Utiliza el secreto proporcionado en las variables de entorno para la autenticación de NextAuth.
 * 
 * Configura una devolución de llamada (session) que extiende la información de la sesión con el ID del usuario obtenido de Sanity
 * 
 * Esta devolución de llamada se ejecuta cuando se crea o actualiza una sesión y permite personalizar la información asociada a esa sesión
 * 
 * Extrae el correo electrónico del token proporcionado durante el proceso de autenticación.
 * 
 * Utiliza sanityClient.fetch para realizar una consulta a la base de datos de Sanity. Busca un documento de tipo "user" que coincida con el correo electrónico proporcionado y obtiene el valor del campo _id de ese documento. La información obtenida se almacena en la variable userIdObj.
 * 
 * Devuelve una nueva sesión extendida. Se mantiene la información existente de la sesión (...session), y se agrega o actualiza la propiedad user con un nuevo campo id, que se establece en el ID del usuario obtenido de Sanity.
 * 
 * 
 */