import { Text } from "@chakra-ui/react";
import useCategories from "../hooks/useCategories";

const ShopifyCategoriesList = () => {
  const { categories, error } = useCategories();

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {categories.map((Category) => (
          <li key={Category.id}>{Category.name}</li>
        ))}
      </ul>
    </>
  );
};

export default ShopifyCategoriesList;
