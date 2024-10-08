import { FC, ReactNode } from "react";

import SpinnerPage from "../spinner-page";
import ErrorPage from "../error-page";
import PokemonList from "../pokemon-list";

import type { Pokemon } from "../../types";

type Props = {
  isLoading: boolean;
  errorMessage: string;
  pokemonList: Pokemon[];
};

const FruitsPage: FC<Props> = ({
  isLoading,
  errorMessage,
  pokemonList,
}): ReactNode => {
  return (
    <>
      {isLoading && !errorMessage && <SpinnerPage />}

      {errorMessage && <ErrorPage errorMessage={errorMessage} />}

      {!isLoading && !errorMessage && (
        <>
          <PokemonList pokemonList={pokemonList} />
        </>
      )}
    </>
  );
};

export default FruitsPage;
