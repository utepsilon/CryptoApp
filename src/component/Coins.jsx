import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "..";
import { Button, Container, HStack, Heading, Radio, RadioGroup, Select, Stack } from "@chakra-ui/react";
import Loader from "./Loader";
import CoinCard from "./CoinCard";
const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("inr");
  const [currencySymbol, setCurrencySymbol] = useState("usd");
  const pages = [1, 2, 3, 4, 5,6,7,8,9,10];
  const changePage = (pageNumber) => {
    setPage(pageNumber);
    setLoading(true);
  };
  useEffect(() => {
    const fetchCoin = async () => {
      try {
        const { data } = await axios.get(
          `${server}/coins/markets?vs_currency=${currency}&page=${page}`
        );
        setCoins(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    };
    fetchCoin();
  }, [currency, page]);
  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader></Loader>
      ) : (
        <>
       <RadioGroup margin={"5"} value={currency} onChange={setCurrency}>
        <Stack justifyContent={"right"} direction={"row"}>
        <Radio value="inr">INR</Radio>
        <Radio value="usd">USD</Radio>
        </Stack>
       </RadioGroup>
          {error ? (
            <Heading> An Error Occured</Heading>
          ) : (
            <HStack margin={"10"} wrap={"wrap"}>
              {coins?.map((coin, index) => {
                return (
                  <CoinCard
                    key={index}
                    name={coin.name}
                    img={coin.image}
                    amount={coin.ath}
                    id={coin.id}
                    url={coin.url}
                    currency={currency}
                    symbol={coin.symbol}
                    currencySymbol={currencySymbol}
                  ></CoinCard>
                );
              })}
            </HStack>
          )}
          <HStack justifyContent={"center"} marginBottom={"10"} >
            {pages?.map((i, index) => {
              return (
                <Button
                  key={index}
                  bgColor={"blackAlpha.900"}
                  color={"white"}
                  _hover={{"bgColor":"crimson", "transition":"0.5s"}}
                  onClick={() => changePage(i)}
                >
                  {i}
                </Button>
              );
            })}
          </HStack>
        </>
      )}
    </Container>
  );
};

export default Coins;
