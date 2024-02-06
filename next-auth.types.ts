import type { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: DefaultSession['user'] & {
      id: string;
    };
  }
}

/**
 * Importa el tipo DefaultSession desde el módulo 'next-auth'. Este tipo probablemente contiene la estructura predeterminada de la sesión proporcionada por next-auth
 * 
 * Utiliza la declaración de módulo (declare module 'next-auth') para extender la interfaz de Session. 
 * Dentro de la interfaz extendida, agrega una propiedad user que es una combinación de la propiedad user de DefaultSession y una propiedad adicional id de tipo string.
 * 
 * Session: La interfaz principal de la sesión proporcionada por next-auth.
 * 
 * DefaultSession['user']: El tipo de la propiedad user en la sesión predeterminada.
 * 
 * user: DefaultSession['user'] & { id: string; }: Combina el tipo de usuario predeterminado con una propiedad adicional id.
 * 
 * En resumen, este código extiende la definición de tipo de sesión (Session) en el módulo 'next-auth' para agregar una propiedad id al objeto user en la sesión. Esto permite tener acceso a un identificador único (id) asociado al usuario en el contexto de la sesión. 
 * La extensión de tipos es una característica útil de TypeScript para adaptar y ampliar las definiciones de tipos existentes según las necesidades específicas de una aplicación.
 */