import {
  Flex,
  Heading,
  ListItem,
  Stack,
  UnorderedList,
} from "@chakra-ui/react";
import Link from "next/link";
import "@fontsource/press-start-2p/400.css";
const Home = () => {
  const pages = ["trivia", "ConnectFour", "Squares"];
  return (
    <Flex
      h="100vh"
      align="center"
      flexDir="column"
      backgroundImage={`url(/ArcadeBG.jpg)`}
      backgroundSize="cover"
      backgroundPosition='center'
    >
      <link rel="stylesheet" href="./node_modules/nes.css/css/nes.min.css" />

      <Stack>
        <Heading m={10} mb={50} color="white">
          Welcome to quiz games!
        </Heading>
        <Flex p={5} flexDir="column" align="center">
          <Heading ml={5} as={"h2"} color="white" size="md">
            Pick your game
          </Heading>
          <UnorderedList>
            {pages.map((page, i) => {
              return (
                <ListItem key={i} pt={10}>
                  <Link href={`/${page}`} className="nes-btn">
                    {page}
                  </Link>
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
