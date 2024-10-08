import {
  FC,
  ReactNode,
  useMemo,
  useCallback,
  useState,
  useContext,
  useEffect,
} from "react";

import PokemonsPage from "../../pokemons-page";

import { PokemonsApiContext } from "../../../contexts";

import { AxiosResponse, AxiosError } from "axios";

import type { Pokemon } from "../../../types";

const PokemonsPageContainer: FC = (): ReactNode => {
  const defaultPokemonList: Pokemon[] = useMemo(() => [], []);

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [pokemonList, setPokemonList] = useState<Pokemon[]>(defaultPokemonList);

  const pokemonsApi = useContext(PokemonsApiContext);

  const getRamdomId = (): number => {
    const randomId = Math.floor(Math.random() * 1000) + 1;

    return randomId;
  };

  const getTwoPokemons = useCallback(async (): Promise<void> => {
    try {
      const newPokemonList: Pokemon[] = [];

      const randomIdOne: number = getRamdomId();

      const pokemonOne: AxiosResponse<Pokemon, any> | undefined =
        await pokemonsApi.getPokemonById(randomIdOne);
      console.log(pokemonOne);

      const randomIdTwo: number = getRamdomId();

      const pokemonTwo: AxiosResponse<Pokemon, any> | undefined =
        await pokemonsApi.getPokemonById(randomIdTwo);

      if (
        typeof pokemonOne?.data === "object" &&
        typeof pokemonTwo?.data === "object"
      ) {
        newPokemonList.push(pokemonOne.data);
        newPokemonList.push(pokemonTwo.data);

        setPokemonList(newPokemonList);
      }

      setIsLoading(false);
    } catch (error) {
      console.error(error);

      if (error instanceof AxiosError) {
        setIsLoading(false);

        setErrorMessage(`${error.code} - ${error.message}`);
      }

      if (error instanceof Error) {
        setIsLoading(false);

        setErrorMessage(error.message);
      }
    }
  }, []);

  useEffect(() => {
    getTwoPokemons();
  }, [getTwoPokemons]);

  return (
    <PokemonsPage
      isLoading={isLoading}
      errorMessage={errorMessage}
      pokemonList={pokemonList}
    />
  );
};

export default PokemonsPageContainer;
