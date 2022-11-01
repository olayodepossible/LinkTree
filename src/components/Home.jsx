import React from "react";
import { Container } from "@chakra-ui/react";
import Body from "./Body";
import Footer from "./Footer";

const Home = () => {
  return (
    <Container maxWidth="1216px" py="44px">
      <Body />
      <Footer />
    </Container>
  );
};

export default Home;
