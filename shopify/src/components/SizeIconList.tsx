import { FaMediumM, FaBuyNLarge, FaTshirt } from "react-icons/fa";
import { GiLargeDress, GiClothes } from "react-icons/gi";
import { Icon, HStack } from "@chakra-ui/react";
import { Size } from "../hooks/useProducts";
import { IconType } from "react-icons";

interface Props {
  sizes: Size[];
}

const SizeIconList = ({ sizes }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    small: GiClothes,
    medium: FaMediumM,
    large: FaBuyNLarge,
    extra_large: FaTshirt,
    double_extra_large: GiLargeDress,
  };
  return (
    <HStack marginY={2}>
      {sizes.map((size) => (
        // <Text>{sizes.name}</Text>
        <Icon key={size.id} as={iconMap[size.slug]} color="gray.500" />
      ))}
    </HStack>
  );
};

export default SizeIconList;
