import { HStack, Text } from "@chakra-ui/react";
import React from "react";

const Item = ({ title, value }) => {
  return (
    <HStack justifyContent={"space-between"} w={"full"} my={"4"}>
      <Text fontWeight={"bold"}>{title}</Text>
      <Text>{value}</Text>
    </HStack>
  );
};

export default Item;
