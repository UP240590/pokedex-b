import { useEffect, useState } from "react";
// Importamos ScrollView para que la lista se pueda desplazar si excede la pantalla
import { ScrollView } from "react-native";
// Importamos el componente visual que creamos anteriormente
import PokemonCards from "../components/PokemonCards";

export default function Index() {
  /* HOOK: useState
     'results' almacenará el array de pokémones.
     'setResults' es la función que usaremos para actualizar ese estado.
  */
  const [results, setResults] = useState<any>([]);

  /* HOOK: useEffect
     Este bloque se ejecuta automáticamente. Al tener el arreglo de dependencias
     vacío [], le decimos a React: "Ejecuta getPokemons() solo la primera vez que
     este componente aparezca en el celular".
  */
  useEffect(() => {
    console.log("Componente montado: Iniciando descarga...");
    getPokemons();
  }, []);

  /* FUNCIÓN: getPokemons
     Es 'async' (asíncrona) porque conectarse a una API toma tiempo y no 
     queremos congelar la aplicación mientras esperamos.
  */
  const getPokemons = async () => {
    // Definimos la dirección de la PokéAPI (aquí pides muchísimos pokémones)
    const URL = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";

    try {
      // 'await' pausa la ejecución hasta que la red responda
      const response = await fetch(URL, {
        method: "GET",
      });

      // Transformamos la respuesta cruda de red en un objeto JavaScript (JSON)
      const data = await response.json();

      /* Actualizamos el estado. Al llamar a setResults, React detecta el cambio
         y vuelve a renderizar (dibujar) la pantalla automáticamente con los datos.
      */
      setResults(data.results);

      console.log("Datos cargados con éxito:", data.results.length, "pokémones.");
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  };

  return (
    /* ScrollView: Permite que el usuario haga scroll hacia abajo.
       Nota: Para listas muy largas (+100 elementos), se recomienda usar 'FlatList'
       para ahorrar memoria, ya que ScrollView renderiza todo de golpe.
    */
    <ScrollView>
      {/* MÉTODO .map():
         Recorre el array 'results' y por cada objeto pokemon, 
         genera un componente <PokemonCards />.
      */}
      {results.map((pokemon: { name: string; url: string }) => (
        <PokemonCards
          // La 'key' ayuda a React a saber qué elemento cambió o se movió
          key={pokemon.name} 
          name={pokemon.name}
          url={pokemon.url}
        />
      ))}
    </ScrollView>
  );
}