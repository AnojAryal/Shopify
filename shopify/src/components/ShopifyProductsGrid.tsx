import { SimpleGrid, Text } from "@chakra-ui/react";
import useProducts from "../hooks/useProducts";
import ProductCard from "./ProductCard";

const ShopifyProductGrid = () => {
  const { products, error } = useProducts();
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={10}
      >
        {products.map((Product) => (
          <ProductCard key={Product.id} product={Product} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default ShopifyProductGrid;
