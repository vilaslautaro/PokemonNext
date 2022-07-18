import { Link, Spacer, Text, useTheme } from "@nextui-org/react";
import Image from "next/image";
import NextLink from "next/link";

export const Navbar = () => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        padding: "0 50px",
        backgroundColor: `${theme?.colors.gray50.value}`,
      }}
    >
      <Image
        src={
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        }
        alt="imagen pokemon"
        width={70}
        height={90}
      />
      <NextLink passHref href="/">
        <Link>
          <Text color="white" h2>P</Text>
          <Text color="white" h3>okemon</Text>
        </Link>
      </NextLink>
      <Spacer css={{ flex: 1 }} />
      <NextLink passHref href="/favorites">
        <Link css={{ marginRight: "10px" }}>
          <Text color="white" h3>Favoritos</Text>
        </Link>
      </NextLink>
    </div>
  );
};
