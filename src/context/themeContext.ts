import { Dispatch, SetStateAction, createContext } from 'react';

type ThemeContextType = {
  darkTheme: boolean;
  setDarkTheme: Dispatch<SetStateAction<boolean>>;
};

const ThemeContext = createContext<ThemeContextType>({
  darkTheme: true,
  setDarkTheme: () => null,
});

export default ThemeContext;

/*
Este código es un ejemplo de cómo se puede usar el contexto en React para gestionar el tema (theme) de una aplicación.

1-. Importa las funciones y tipos necesarios de la biblioteca React. Dispatch y SetStateAction son tipos utilizados para describir el tipo de función que puede modificar el estado en React

2.- Definición del tipo de contexto: Aquí se define el tipo ThemeContextType, que describe la forma del objeto que se espera en el contexto. El contexto tiene dos propiedades: darkTheme, que es un booleano que indica si el tema es oscuro o no, y setDarkTheme, que es una función que se utiliza para cambiar el estado del tema.

3.- Creación del contexto: Aquí se crea el contexto utilizando la función createContext de React. Se proporciona un valor predeterminado que tiene un tema oscuro (darkTheme: true) y una función que no hace nada (setDarkTheme: () => null). Esto es útil para proporcionar un valor predeterminado cuando un componente consume este contexto y no se encuentra dentro de un proveedor de contexto.

4.- Exportación del contexto: Finalmente, se exporta el contexto para que pueda ser utilizado por otros componentes. Esto permite a los componentes consumir o modificar el tema de la aplicación utilizando este contexto.

En resumen, este código establece un contexto de tema en React, que puede ser utilizado para compartir y gestionar el estado del tema (oscuro o claro) en diferentes partes de una aplicación React.
 */