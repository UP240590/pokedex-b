import React from "react";
// Importamos los componentes básicos de la interfaz de React Native
import { Image, Text, View } from "react-native";

// Definimos la "forma" de los datos que este componente espera recibir (Props)
interface PokemonCardProps {
  name: string; // Ejemplo: "bulbasaur"
  url: string;  // Ejemplo: "https://pokeapi.co/api/v2/pokemon/1/"
}

export default function PokemonCards(props: PokemonCardProps) {
  /* Lógica para extraer el ID:
     La URL termina en ".../pokemon/1/". 
     1. .split("/") divide el texto en un array usando las barras diagonales.
     2. .slice(-2, -1) toma el penúltimo elemento (donde reside el número).
     3. [0] accede a ese valor extraído.
  */
  const id = props.url.split("/").slice(-2, -1)[0];

  // Construimos la URL de la imagen usando el repositorio oficial de sprites de GitHub
  const pokemonImageURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    // Contenedor principal de la tarjeta con estilos en línea
    <View
      style={{
        padding: 10,           // Espaciado interno
        borderWidth: 1,        // Grosor del borde
        alignItems: "center",  // Centra la imagen y el texto horizontalmente
        marginBottom: 5,       // Espacio con la siguiente tarjeta
      }}
    >
      {/* Componente para mostrar la imagen del Pokémon */}
      <Image
        source={{ uri: pokemonImageURL }} // Fuente externa (URL)
        style={{ width: 100, height: 100 }} // En React Native, las imágenes web requieren tamaño definido
      />
      
      {/* Mostramos el nombre del Pokémon */}
      <Text style={{ fontWeight: 'bold', textTransform: 'capitalize' }}>
        {props.name}
      </Text>
      
      {/* Mostramos la URL (útil para debug, aunque quizás no necesaria para el usuario final) */}
      <Text>{props.url}</Text>
    </View>
  );
}