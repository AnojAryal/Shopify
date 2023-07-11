import { Product } from "../hooks/useProducts";
import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import SizeIconList from "./SizeIconList";
import CriticStore from "./CriticStore";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <Card>
      <Image src={product.background_image} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <SizeIconList sizes={product.sizes_list} />
          <CriticStore score={product.metacritic} />
        </HStack>
        <Heading fontSize="2xl">{product.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default ProductCard;
