import { FC } from "react";
import Head from "next/head";
import { Navbar } from "../ui";

type Props = {
  children: React.ReactNode[] | React.ReactNode | undefined;
  title?: string;
};

const origin = (typeof window === 'undefined') ? '' : window.location.origin

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
        <meta property="og:title" content={`Informacion sobre ${title}`} />
        <meta property="og:description" content={`Obtene la mejor informacion sobre ${title} y mucho más sobre Pokemon!`} />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
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
