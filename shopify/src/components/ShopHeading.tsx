import { Heading } from "@chakra-ui/react";
import { ShopQuery } from "../App";

interface Props {
  shopQuery: ShopQuery;
}

const ShopHeading = ({ shopQuery }: Props) => {
  const heading = `${shopQuery.category?.name || ""} ${
    shopQuery.size?.name || ""
  } Products`;

  return (
    <Heading as="h1" marginY={5}>
      {heading}
    </Heading>
  );
};

export default ShopHeading;
