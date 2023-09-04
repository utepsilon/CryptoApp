import { Heading, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { BsCurrencyRupee, BsCurrencyDollar } from "react-icons/bs";
import { Link } from "react-router-dom";
const CoinCard = ({
  name,
  img,
  amount,
  id,
  currency,
  symbol,
}) => {
  return (
    <>
      <Link to={`/coin/${id}`} target={"blank"}>
        <VStack
          w={52}
          shadow={"lg"}
          p={"8"}
          borderRadius={"xl"}
          transition={"all 0.5s"}
          margin={"4"}
          css={{
            "&:hover": {
              transform: "scale(1.1)",
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
          <Heading size={"md"} noOfLines={"1"}>
            {symbol}
          </Heading>
          <Text size={"md"} objectFit={"contain"} noOfLines={"1"}>
            {name}
          </Text>
          <Text display={"flex"}>
            {amount}{" "}
            {currency === "inr" ? (
              <BsCurrencyRupee style={{ marginTop: "5px" }}></BsCurrencyRupee>
            ) : (
              <BsCurrencyDollar style={{ marginTop: "5px" }} />
            )}
          </Text>
        </VStack>
      </Link>
    </>
  );
};

export default CoinCard;
