import { Badge } from "@chakra-ui/react";
import React from "react";

interface Props {
  score: number;
}

const CriticStore = ({ score }: Props) => {
  let color = score > 70 ? "green" : score > 50 ? "yellow" : "red";
  return (
    <Badge colorScheme={color} fontSize="14px" paddingX={2} borderRadius="5px">
      {score}
    </Badge>
  );
};

export default CriticStore;
