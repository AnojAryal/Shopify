import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useCategories, { Categories } from "../hooks/useCategories";

interface Props {
  onSelectCategory: (category: Categories) => void;
  selectedCategory: Categories | null;
}

const ShopifyCategoriesList = ({
  onSelectCategory,
  selectedCategory,
}: Props) => {
  const { data, error, isLoading } = useCategories();

  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Categories
      </Heading>
      {error && <Text>{error}</Text>}
      <List>
        {data.map((category) => (
          <ListItem key={category.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={category.background_image}
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontWeight={
                  category.id === selectedCategory?.id ? "bold" : "normal"
                }
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
