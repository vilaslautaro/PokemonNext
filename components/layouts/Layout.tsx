import Head from "next/head";
import { FC } from "react";
import { Navbar } from "../ui";

type Props = {
  children: React.ReactNode[] | React.ReactNode | undefined;
  title?: string;
};

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta
          name="description"
          content={`Informacion sobre el pokemon ${title}`}
        />
        <meta name="authot" content="Lautaro Vilas"></meta>
        <meta name="keywords" content={`${title}. pokemon, pokedex`} />
      </Head>

      <Navbar />

      <main
        style={{
          padding: "0 20px",
        }}
      >
        {children}
      </main>
    </>
  );
};
