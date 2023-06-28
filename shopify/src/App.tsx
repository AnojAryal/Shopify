import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <div>
      <Grid
        templateAreas={{
          base: `"nav"  "main"`, //Mobile devices
          lg: `"nav nav" "aside main"`, //large devices
        }}
      >
        <GridItem area="nav" bg="coral">
          Nav
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" bg="gold">
            Aside
          </GridItem>
        </Show>
        <GridItem area="main" bg="dodgerblue">
          Main
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
