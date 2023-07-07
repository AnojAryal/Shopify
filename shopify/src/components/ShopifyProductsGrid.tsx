import { SimpleGrid, Text } from "@chakra-ui/react";
import useProducts, { Size } from "../hooks/useProducts";
import ProductCard from "./ProductCard";
import ProductCardSkeleton from "./ProductCardSkeleton";
import ProductCardContainer from "./ProductCardContainer";
import { Categories } from "../hooks/useCategories";

interface Props {
  selectedCategory: Categories | null;
  selectedSize: Size | null;
}

const ShopifyProductGrid = ({ selectedCategory, selectedSize }: Props) => {
  const { data, error, isLoading } = useProducts(
    selectedCategory,
    selectedSize
  );
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={4}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <ProductCardContainer key={skeleton}>
              <ProductCardSkeleton />
            </ProductCardContainer>
          ))}
        {data.map((product) => (
          <ProductCardContainer key={product.id}>
            <ProductCard product={product} />
          </ProductCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default ShopifyProductGrid;
