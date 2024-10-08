import { FC, ReactNode } from "react";

import { List } from "@mui/material";
import PokemonListItem from "../pokemon-list-item";

import type { Pokemon } from "../../types";

type Props = {
  pokemonList: Pokemon[];
};

const PokemonList: FC<Props> = ({ pokemonList }): ReactNode => {
  return (
    <List style={{ display: "flex", flexDirection: "row" }}>
      {pokemonList.map(
        ({ id, name, base_experience, height, weight, sprites, abilities }) => (
          <PokemonListItem
            key={id}
            id={id}
            name={name}
            sprites={sprites}
            base_experience={base_experience}
            height={height}
            weight={weight}
            ability={abilities[0].ability.name}
          />
        )
      )}
    </List>
  );
};

export default PokemonList;
