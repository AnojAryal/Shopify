import { Text } from "@chakra-ui/react";
import useProducts from "../hooks/useProducts";

const ShopifyProductGrid = () => {
  const { products, error } = useProducts();
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {products.map((Product) => (
          <li key={Product.id}>{Product.name}</li>
        ))}
      </ul>
    </>
  );
};

export default ShopifyProductGrid;
