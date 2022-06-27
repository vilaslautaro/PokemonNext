import { Grid } from "@nextui-org/react";
import type { GetStaticProps, NextPage } from "next";
import { pokeApi } from "../api";
import { Layout } from "../components/layouts";
import { PokemonCard } from "../components/pokemon";
import { PokemonListResponse } from "../interfaces";
import { SmallPokemon } from "../interfaces/pokemon-list";

interface Props {
  pokemons: SmallPokemon[];
  status?: number;
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title="Pokemon">
      <Grid.Container gap={2} justify="flex-start">
        {pokemons.map((pokemon) => {
          return <PokemonCard pokemon={pokemon} key={pokemon.id}/>;
        })}
      </Grid.Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { data } = await pokeApi.get<PokemonListResponse>(
    "/pokemon/?limit=151"
  );

  const urlImg =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world";

  const pokemons: SmallPokemon[] = data.results.map((pokemon, index) => {
    return {
      ...pokemon,
      img: `${urlImg}/${index + 1}.svg`,
      id: index + 1,
    };
  });

  return {
    props: {
      pokemons,
    },
  };
};

export default HomePage;
