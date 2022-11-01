import React from "react";
import { Container } from "@chakra-ui/react";
import Profile from "./Profile";
import ProductLink from "./ProductLink";
import SocialLinks from "./SocialLinks";
import Footer from "./Footer";

const Body = () => {
  return (
    <Container maxWidth="1216px" py="44px">
      <Profile />
      <ProductLink />
      <SocialLinks />
      <Footer />
    </Container>
  );
};

export default Body;
