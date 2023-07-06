import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import ShopifyProductGrid from "./components/ShopifyProductsGrid";
import ShopifyCategoriesList from "./components/ShopifyCategoriesList";
import { useState } from "react";
import { Categories } from "./hooks/useCategories";
import SizeSelector from "./components/SizeSelector";

function App() {
  const [selectedCategory, setSelectedCategory] = useState<Categories | null>(
    null
  );
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
            <ShopifyCategoriesList
              selectedCategory={selectedCategory}
              onSelectCategory={(category) => setSelectedCategory(category)}
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <SizeSelector />
          <ShopifyProductGrid selectedCategory={selectedCategory} />
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
