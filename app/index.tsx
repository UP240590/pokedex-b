import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Button, ScrollView } from "react-native";
import PokemonCard from "../components/PokemonCards";

export default function Index() {
  const [results, setResults] = useState<any[]>([]);
  useEffect(() => {
    console.log("Entre en pantalla");
    getPokemons();
  }, []);

  const getPokemons = async () => {
    const URL = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
    const response = await fetch(URL, {
      method: "GET",
    });
    const data = await response.json();
    setResults(data.results);
    console.log(data);
  };

  return (
    <ScrollView>
      <Button title="Nueva Pantalla" onPress={() => router.push("/pokemon")} />
      <Button
        title="Pokemon Index"
        onPress={() => router.push("/new-screen")}
      />
      <Button
        title="Detalles del Pokemon"
        onPress={() => router.push("/pokemon/[name]")}
      />
      {results.map((pokemon) => (
        <PokemonCard key={pokemon.name} name={pokemon.name} url={pokemon.url} />
      ))}
    </ScrollView>
  );
}
