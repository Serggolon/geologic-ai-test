import { createContext } from "react";

import { PokemonsApi } from "../api";

export const pokemonsApi = new PokemonsApi();

const PokemonsApiContext = createContext(pokemonsApi);

export default PokemonsApiContext;
