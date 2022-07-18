import { Container, Text } from "@nextui-org/react";
import Image from "next/image";

const NoFavorites = () => {
  return (
    <Container
      css={{
        display: "flex",
        flexDirection: "column",
        height: "calc(100vh - 100px)",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
      }}
    >
      <Text h1> No hay favoritos</Text>
      <Image
        src={
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/143.svg"
        }
        width={250}
        height={250}
      />
    </Container>
  );
};

export default NoFavorites;
