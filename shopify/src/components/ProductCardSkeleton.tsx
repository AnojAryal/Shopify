import {
  Card,
  CardBody,
  HStack,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

const ProductCardSkeleton = () => {
  return (
    <Card width="300px" borderRadius={10} overflow="hidden">
      <Skeleton height="200px" />
      <CardBody>
        <HStack justifyContent="space-between" />
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default ProductCardSkeleton;
