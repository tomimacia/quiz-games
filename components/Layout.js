import { Flex, Heading, Text } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import ArcadeBG from "../public/ArcadeBG.jpg";
import ArcadeLogo from "../public/ArcadeLogo.png";
import Link from "next/link";
const Layout = ({ title , isTrivia, opacity, children }) => {
  return (
    <Flex
      color="white"
      align="center"
      backgroundImage={!isTrivia && ArcadeBG.src}      
      backgroundSize={!isTrivia && "cover"}
      backgroundPosition={!isTrivia && "center"}
      minH="100vh"
      flexDir="column"
      bg={isTrivia && "yellow.300"}
      opacity={opacity}
    >
      <Head>
        <meta />
        <title>{title}</title>
        <link rel="icon" href={ArcadeLogo.src} type="image/x-icon" />
      </Head>
      <Flex flexDir="column">
        <Heading m={5} color={isTrivia ? "black" : "white"}>
          {title}!
        </Heading>
        <Link href="/">
          <Text color={isTrivia ? "black" : "white"}>Back home</Text>
        </Link>
      </Flex>
      {children}
    </Flex>
  );
};

export default Layout;
