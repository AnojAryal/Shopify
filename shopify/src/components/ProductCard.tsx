import { Product } from "../hooks/useProducts";
import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import SizeIconList from "./SizeIconList";
import CriticStore from "./CriticStore";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <Card width="300px" borderRadius={10} overflow="hidden">
      <Image src={product.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{product.name}</Heading>
        <HStack justifyContent="space-between">
          <SizeIconList sizes={product.sizes_list} />
          <CriticStore score={product.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default ProductCard;
