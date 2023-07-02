import { SimpleGrid, Text } from "@chakra-ui/react";
import useProducts from "../hooks/useProducts";
import ProductCard from "./ProductCard";
import ProductCardSkeleton from "./productCardSkeleton";

const ShopifyProductGrid = () => {
  const { products, error, isLoading } = useProducts();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={10}
      >
        {isLoading &&
          skeletons.map((skeleton) => <ProductCardSkeleton key={skeleton} />)}
        {products.map((Product) => (
          <ProductCard key={Product.id} product={Product} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default ShopifyProductGrid;
