'use client';

import { SessionProvider } from 'next-auth/react';

type Props = {
  children: React.ReactNode;
};

export const NextAuthProvider = ({ children }: Props) => {
  return <SessionProvider>{children}</SessionProvider>;
};

/**
 * El código que proporcionaste define un componente de proveedor de autenticación para NextAuth
 * 
 * Importa el componente SessionProvider de next-auth/react. Este componente es proporcionado por NextAuth para envolver la aplicación con el contexto de sesión de autenticación
 * 
 * Define un tipo Props que especifica que el componente acepta un único prop llamado children, que debe ser de tipo React.ReactNode. Esto se hace para asegurar que solo los elementos React válidos sean pasados como hijos al componente
 * 
 * Define un componente funcional NextAuthProvider que toma el prop children. Este componente envuelve los hijos dentro del SessionProvider proporcionado por NextAuth. Esto asegura que los componentes dentro de la aplicación tengan acceso al contexto de sesión de autenticación proporcionado por NextAuth.
 * 
 * 
 */