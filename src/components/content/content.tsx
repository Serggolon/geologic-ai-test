import PokemonsPageContainer from "../containers/pokemons-page-container";

import { Grid2 as Grid, Container } from "@mui/material";

function Content() {
  return (
    <Container maxWidth="lg" sx={{ flexGrow: 1, my: 3 }}>
      <Grid container spacing={3}>
        <PokemonsPageContainer />
      </Grid>
    </Container>
  );
}

export default Content;
