import React from "react";
import { chakra, Image, Box, Heading, VisuallyHidden } from "@chakra-ui/react";
import OptionsIcon from "../assets/icons/options-icon.png";
import ShareIcon from "../assets/icons/share-icon.png";
import ProfileImg from "../assets/img/profile_pic.png";

const OptionsButton = (
  <chakra.button aria-label="Options" ml="auto" display={{ base: "block", md: "none" }} w="40px" h="40px" mb="-20px">
    <img src={OptionsIcon} alt="Options icon" />
  </chakra.button>
);

const ShareButton = (
  <chakra.button aria-label="Options" ml="80%" display={{ base: "none", md: "block" }} w="40px" h="40px" mb="-20px">
    <img src={ShareIcon} alt="Share icon" />
  </chakra.button>
);

const Profile = () => {
  return (
    <chakra.header mb={{ base: "16px", md: "32px" }}>
      {OptionsButton}
      {ShareButton}
      <Box boxSize="88px" mx="auto" mb={6}>
        <Image src={ProfileImg} alt="Profile Picture" id="profile__img" />
      </Box>

      <Heading id="twitter" fontSize="20px" textAlign="center">
        Annette Black
      </Heading>
      <VisuallyHidden id="slack">HNG9-Task</VisuallyHidden>
    </chakra.header>
  );
};

export default Profile;
