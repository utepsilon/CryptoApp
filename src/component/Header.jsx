import { Button, HStack } from "@chakra-ui/react";
import { transform } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HStack gap={"40"} p={"4"} shadow={"base"} bgColor={"blackAlpha.900"}>
      <Button
        variant={"solid"}
        color={"crimson"}
        _hover={{ bgColor: "crimson", color: "black", transition: "0.7s",transform: "scale(1.1)", }}
      >
        <Link to={"/"}>CoinApp</Link>
      </Button>
      <Button
        variant={"unstyled"}
        color={"white"}
        _hover={{ color: "crimson", shadow: "base", transition: "0.7s"
        ,transform: "scale(1.1)", }}
      >
        <Link to={"/"}>Home</Link>
      </Button>
      <Button
        variant={"unstyled"}
        color={"white"}
        _hover={{
          color: "crimson",
          shadow: "base",
          transition: "0.7s",
          transform: "scale(1.1)",
        }}
      >
        <Link to={"/exchanges"}>Exchanges</Link>
      </Button>
      <Button
        variant={"unstyled"}
        color={"white"}
        _hover={{ color: "crimson", shadow: "base", transition: "0.7s" ,transform: "scale(1.1)",}}
      >
        <Link to={"/coins"}>Coins</Link>
      </Button>
    </HStack>
  );
};

export default Header;
