import { useState, useEffect } from "react";
import { Layout } from "../../components/layouts";
import FavoritePokemons from "../../components/pokemon/FavoritePokemons";
import { localFavorite } from "../../utils";
import NoFavorites from "./components/NoFavorites";

const FavoritesPage = () => {
  const [favoritePokemons, setfavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setfavoritePokemons(localFavorite.pokemons());
  }, []);

  return (
    <Layout title="Pokemons - Favoritos">
      {favoritePokemons.length === 0 
      ? <NoFavorites />
      : <FavoritePokemons pokemons={favoritePokemons} />
      }
    </Layout>
  );
};

export default FavoritesPage;
