import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useSizes from "../hooks/useSizes";
import { Size } from "../hooks/useProducts";

interface Props {
  onSelectSize: (size: Size) => void;
  selectedSize: Size | null;
}

const SizeSelector = ({ onSelectSize, selectedSize }: Props) => {
  const { data, error } = useSizes();

  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedSize?.name || "Sizes"}
      </MenuButton>
      <MenuList>
        {data.map((size) => (
          <MenuItem onClick={() => onSelectSize(size)} key={size.id}>
            {size.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SizeSelector;
