import { Product } from "../hooks/useProducts";
import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import SizeIconList from "./SizeIconList";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={product.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{product.name}</Heading>
        <SizeIconList sizes={product.sizes_list} />
      </CardBody>
    </Card>
  );
};

export default ProductCard;
