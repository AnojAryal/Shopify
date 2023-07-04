import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useCategories, { Category } from "../hooks/useCategories";

const ShopifyCategoriesList = () => {
  const { data, error } = useCategories();

  return (
    <>
      {error && <Text>{error}</Text>}
      <List>
        {data.map((Category) => (
          <ListItem key={Category.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={Category.background_image}
              />
              <Text fontSize="lg">{Category.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default ShopifyCategoriesList;
