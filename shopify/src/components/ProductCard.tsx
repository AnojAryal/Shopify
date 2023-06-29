import { Product } from "../hooks/useProducts";
import { Card, CardBody, Heading, Image } from "@chakra-ui/react";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={product.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{product.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default ProductCard;
