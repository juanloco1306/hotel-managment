import NextAuth from 'next-auth';

import { authOptions } from '@/libs/auth';

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

/**
 * Importa el módulo NextAuth, que es una biblioteca para la autenticación de usuarios en aplicaciones Next.js.
 * 
 * Crea una instancia de NextAuth utilizando las opciones de autenticación proporcionadas en authOptions. Esta instancia se almacena en la variable handler
 * 
 * Exporta la instancia de NextAuth como dos controladores, GET y POST. Esto significa que la misma instancia de NextAuth se utilizará para manejar tanto las solicitudes GET como las solicitudes POST relacionadas con la autenticación en la aplicación
 */