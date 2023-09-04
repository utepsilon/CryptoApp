import { Heading, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

const ExchangeCard = ({ name, img, rank, url}) => {
  return (
    <>
      <a href={url} target={"blank"}>
        <VStack
          w={52}
          shadow={"lg"}
          p={"8"}
          borderRadius={"xl"}
          transition={"all 0.5s"}
          margin={"4"}
          css={{
            "&:hover": {
              "transform": "scale(1.1)",
            },
          }}
        >
          <Image
            src={img}
            width={"10"}
            height={"10"}
            objectFit={"contain"}
            alt={name}
          ></Image>
          <Heading size={"md"}>{rank}</Heading>
          <Text noOfLines={"1"}>{name}</Text>
        </VStack>
      </a>
    </>
  );
};

export default ExchangeCard;
