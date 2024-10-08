import axios, {
  AxiosInstance,
  AxiosResponse,
  AxiosError,
} from "axios";

import CustomRequestError from "./custom-request-error";

import type { CustomErrorInterface, Pokemon } from "../types";

class PokemonsApi {
  #pokemonsApi: AxiosInstance;

  constructor() {
    this.#pokemonsApi = axios.create({
      baseURL: "http://localhost:3000",
      timeout: 5000,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });

    this.#pokemonsApi.interceptors.response.use(
      (response) => response,
      (error) => this.#handleError(error)
    );
  }

  #handleError = (error: any): never => {
    const isAxiosError = axios.isAxiosError(error);

    if (isAxiosError && error.response) {
      const { message, code }: AxiosError = error;

      const resultError: CustomErrorInterface = new CustomRequestError(
        "status code outside 2xx",
        message,
        code
      );

      throw resultError;
    } else if (isAxiosError && error.request) {
      const { message, code }: AxiosError = error;

      const resultError: CustomErrorInterface = new CustomRequestError(
        "Request made, no response",
        message,
        code
      );

      throw resultError;
    }

    if (!isAxiosError && error instanceof Error) {
      const { name, message } = error;

      const resultError: CustomErrorInterface = new CustomRequestError(
        name,
        message
      );

      throw resultError;
    }

    throw error;
  };

  public getPokemonById = async (
    id: number
  ): Promise<AxiosResponse<Pokemon, any> | undefined> => {
    try {
      const response: AxiosResponse<
        Array<Pokemon>,
        any
      > = await this.#pokemonsApi.get(`api/v2/pokemon/${id}/`);

      return response;
    } catch (error) {
      this.#handleError(error);
    }
  };
}

export default PokemonsApi;
