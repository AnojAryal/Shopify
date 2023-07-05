import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useCategories, { Categories } from "../hooks/useCategories";

interface Props {
  onSelectCategory: (category: Categories) => void;
}

const ShopifyCategoriesList = ({ onSelectCategory }: Props) => {
  const { data, error, isLoading } = useCategories();

  if (isLoading) return <Spinner />;

  return (
    <>
      {error && <Text>{error}</Text>}
      <List>
        {data.map((category) => (
          <ListItem key={category.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={category.background_image}
              />
              <Button
                onClick={() => onSelectCategory(category)}
                fontSize="lg"
                variant="link"
              >
                {category.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default ShopifyCategoriesList;
