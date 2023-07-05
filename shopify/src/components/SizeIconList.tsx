import { FaMediumM } from "react-icons/fa";
import { Text, Icon, HStack } from "@chakra-ui/react";
import { Size } from "../hooks/useProducts";
import { IconType } from "react-icons";

interface Props {
  sizes: Size[];
}

const SizeIconList = ({ sizes }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    medium: FaMediumM,
  };
  return (
    <HStack marginY={2}>
      {sizes.map((sizes) => (
        // <Text>{sizes.name}</Text>
        <Icon key={sizes.id} as={iconMap[sizes.slug]} color="gray.500" />
      ))}
    </HStack>
  );
};

export default SizeIconList;
