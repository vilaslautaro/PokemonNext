import { Card, Grid, Row, Text } from "@nextui-org/react";
import { FC } from "react";
import { SmallPokemon } from "../../interfaces";
import { useRouter } from "next/router";

interface Props {
  pokemon: SmallPokemon;
}

export const PokemonCard: FC<Props> = ({ pokemon }) => {
  const { id, img, name } = pokemon;

  const router = useRouter();

  const onClick = (name: string) => {
    router.push(`/name/${name}`);
  };

  return (
    <Grid xs={6} sm={3} md={2} xl={1}>
      <Card isHoverable isPressable onClick={() => onClick(name)}>
        <Card.Body css={{ p: 1 }}>
          <Card.Image
            src={img}
            alt={`Pokemon ${name}`}
            width="100%"
            height={140}
          />
          <Card.Footer>
            <Row justify="space-between">
              <Text transform="capitalize">{name} </Text>
              <Text>#{id}</Text>
            </Row>
          </Card.Footer>
        </Card.Body>
      </Card>
    </Grid>
  );
};
