import type { NextPage, GetStaticProps } from "next";
import Image from "next/image";
import { pokeApi } from "../api";
import { Layout } from "../components/layouts";
import { PokemonListResponse } from "../interfaces";
import { SmallPokemon } from "../interfaces/pokemon-list";

interface Props {
  pokemons: SmallPokemon[];
  status?: number;
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  console.log(pokemons);

  return (
    <Layout title="Pokemon">
      <ul>
        {pokemons.map(({ name, id, img }) => {
          return (
            <li key={id}>
              #{id} - {name}
              <Image src={img} alt={`Pokemon ${name}`} width={30} height={30} />
            </li>
          );
        })}
      </ul>
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
