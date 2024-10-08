import Header from "./components/header";
import Content from "./components/content";
import Footer from "./components/footer";

import { CssBaseline, Box } from "@mui/material";

import { PokemonsApiContext } from "./contexts";
import { pokemonsApi } from "./contexts/pokemons-api-context";

function App() {
  return (
    <>
      <CssBaseline />

      <Box
        sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <PokemonsApiContext.Provider value={pokemonsApi}>
          <Header />

          <Content />

          <Footer />
        </PokemonsApiContext.Provider>
      </Box>
    </>
  );
}

export default App;
