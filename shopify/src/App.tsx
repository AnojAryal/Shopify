import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import ShopifyProductGrid from "./components/ShopifyProductsGrid";
import ShopifyCategoriesList from "./components/ShopifyCategoriesList";
import { useState } from "react";
import { Categories } from "./hooks/useCategories";
import SizeSelector from "./components/SizeSelector";
import { Size } from "./hooks/useProducts";
import SortSelector from "./components/SortSelector";

export interface ShopQuery {
  category: Categories | null;
  size: Size | null;
}

function App() {
  const [shopQuery, setShopQuery] = useState<ShopQuery>({} as ShopQuery);

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
              selectedCategory={shopQuery.category}
              onSelectCategory={(category) =>
                setShopQuery({ ...shopQuery, category })
              }
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <HStack spacing={5} paddingLeft={2} marginBottom={5}>
            <SizeSelector
              selectedSize={shopQuery.size}
              onSelectSize={(size) => setShopQuery({ ...shopQuery, size })}
            />
            <SortSelector />
          </HStack>
          <ShopifyProductGrid shopQuery={shopQuery} />
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
