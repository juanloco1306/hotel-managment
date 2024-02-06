import { createClient } from 'next-sanity';

const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: process.env.NODE_ENV === 'production',
  token: process.env.SANITY_STUDIO_TOKEN,
  apiVersion: '2021-10-21',
});

export default sanityClient;

/**
 * Este código configura y exporta un cliente de Sanity para acceder a su API.
 * 
 * Utiliza la función createClient para crear un cliente Sanity. La configuración incluye:

projectId: El ID del proyecto de Sanity.
dataset: El conjunto de datos en Sanity.
useCdn: Un indicador booleano que determina si se debe utilizar el CDN de Sanity en entornos de producción.
token: Un token opcional utilizado para autenticación.
apiVersion: La versión de la API de Sanity que se utilizará.

Exporta la instancia del cliente Sanity configurada como el valor predeterminado del módulo, 
lo que permite que otros módulos importen y utilicen este cliente para interactuar con la API de Sanity
 */