import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import{router}from"expo-router";
interface PokemonCardProps {
  name: string;
  url: string;
}

export default function PokemonCards(props: PokemonCardProps) {
  const id = props.url.split("/").slice(-2, -1)[0];
  const pokemonImageURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  return (
    <Pressable
      onPress={() => router.push(`../pokemon/ ${props.name}`)}       
      style={{
        padding: 10,
        borderWidth: 1,
        alignItems: "center",
        marginBottom: 8,
      }}
    >
      <Image
        source={{ uri: pokemonImageURL }}
        style={{ width: 150, height: 150 }}
      ></Image>
      <Text>{props.name}</Text>
      <Text>{props.url}</Text>
    </Pressable>
  );
}