import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import ShopifyProductGrid from "./components/ShopifyProductsGrid";
import ShopifyCategoriesList from "./components/ShopifyCategoriesList";

function App() {
  return (
    <div>
      <Grid
        templateAreas={{
          base: `"nav"  "main"`, //Mobile devices
          lg: `"nav nav" "aside main"`, //large devices
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <ShopifyCategoriesList />
          </GridItem>
        </Show>
        <GridItem area="main">
          <ShopifyProductGrid />
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
