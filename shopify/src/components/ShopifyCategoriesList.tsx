import { Text } from "@chakra-ui/react";
import useCategories, { Category } from "../hooks/useCategories";

const ShopifyCategoriesList = () => {
  const { data, error } = useCategories();

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {data.map((Category) => (
          <li key={Category.id}>{Category.name}</li>
        ))}
      </ul>
    </>
  );
};

export default ShopifyCategoriesList;
