import {
  Button,
  Flex,
  Heading,
  ListItem,
  Stack,
  UnorderedList,
} from '@chakra-ui/react';
import Link from 'next/link';
import '@fontsource/press-start-2p/400.css';
import Head from 'next/head';
import ArcadeBG from '../public/ArcadeBG.jpg';
import Layout from '../components/Layout';
const Home = () => {
  const PAGES = ['Trivia', 'ConnectFour', 'Squares'];
  return (
    <Flex
      h='100vh'
      align='center'
      flexDir='column'
      backgroundImage={ArcadeBG.src}
      backgroundSize='cover'
      backgroundPosition='center'
    >
      <Layout isIndex title='Welcome to quiz games'>
        <Stack>
          <Flex p={5} flexDir='column' align='center'>
            <Heading ml={5} as={'h2'} color='white' size='md'>
              Pick your game
            </Heading>
            <UnorderedList>
              {PAGES.map((page) => {
                return (
                  <ListItem
                    listStyleType='none'
                    key={`pages-key-${page}`}
                    pt={10}
                  >
                    <Button
                      as={Link}
                      bg='white'
                      _hover={{ bg: 'gray' }}
                      href={`/${page}`}
                      className='nes-btn'
                    >
                      {page}
                    </Button>
                  </ListItem>
                );
              })}
            </UnorderedList>
          </Flex>
        </Stack>
      </Layout>
    </Flex>
  );
};

export default Home;
