import { pokeApi } from "../api";
import { Pokemon } from "../interfaces";

export const getPokemonInfo = async (value: string) => {
  try {
    const { data } = await pokeApi.get<Pokemon>(`/pokemon/${value}`);
    return {
      id: data.id,
      name: data.name,
      sprites: data.sprites,
      img: data.sprites.other?.dream_world.front_default,
    };
  } catch (error) {
    return null;
  }
};
