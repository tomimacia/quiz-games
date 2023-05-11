import {
  Button,
  Flex,
  Heading,
  ListItem,
  Stack,
  UnorderedList,
} from "@chakra-ui/react";
import Link from "next/link";
import "@fontsource/press-start-2p/400.css";
import Head from "next/head";
import ArcadeBG from "../public/ArcadeBG.jpg";
const Home = () => {
  const PAGES = ["Trivia", "ConnectFour", "Squares"];
  return (
    <Flex
      h="100vh"
      align="center"
      flexDir="column"
      backgroundImage={ArcadeBG.src}
      backgroundSize="cover"
      backgroundPosition="center"
    >
      <Head>
        <link rel="stylesheet" href="./node_modules/nes.css/css/nes.min.css" />
        <title>Quiz Games</title>
      </Head>

      <Stack>
        <Heading m={10} mb={50} color="white">
          Welcome to quiz games!
        </Heading>
        <Flex p={5} flexDir="column" align="center">
          <Heading ml={5} as={"h2"} color="white" size="md">
            Pick your game
          </Heading>
          <UnorderedList>
            {PAGES.map((page, i) => {
              return (
                <ListItem listStyleType="none" key={i} pt={10}>
                  <Button as={Link} bg='white' _hover={{bg:"gray"}} href={`/${page}`} className="nes-btn">
                    {page}
                  </Button>
                </ListItem>
              );
            })}
          </UnorderedList>
        </Flex>
      </Stack>
    </Flex>
  );
};

export default Home;
