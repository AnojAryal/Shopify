import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useSizes from "../hooks/useSize";

const SizeSelector = () => {
  const { data, error } = useSizes();

  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Sizes
      </MenuButton>
      <MenuList>
        {data.map((size) => (
          <MenuItem key={size.id}>{size.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SizeSelector;
