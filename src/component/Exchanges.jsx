import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "..";
import { Container, HStack, Heading } from "@chakra-ui/react";
import Loader from "./Loader";
import ExchangeCard from "./ExchangeCard";

const Exchanges = () => {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const[error,setError] = useState(false);
  useEffect(() => {
    const fetchExchanges = async () => {
      try { 
      const { data } = await axios.get(`${server}/exchanges`);
      setExchanges(data);
      setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    };
    fetchExchanges();
  }, []);
  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader></Loader>
      ) : (
        <>
        {error ? <Heading> An Error Occured</Heading> :
          <HStack margin={"10"} wrap={"wrap"}>
            {exchanges?.map((coin, index) => {
              return (
                <ExchangeCard
                  key={index}
                  name={coin.name}
                  img={coin.image}
                  rank={coin.trust_score_rank}
                  id={coin.id}
                  url={coin.url}
                ></ExchangeCard>
              );
            })}
          </HStack>
}
        </>
      )}
    </Container>
  );
};

export default Exchanges;
