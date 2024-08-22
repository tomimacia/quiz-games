import { Flex, Heading, Text } from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';
import ArcadeBG from '../public/ArcadeBG.jpg';
import ArcadeLogo from '../public/ArcadeLogo.png';
import Link from 'next/link';
import Footer from './Footer';
const Layout = ({ title, isIndex = false, isTrivia, opacity, children }) => {
  return (
    <>
      <Head>
        <meta />
        <title>{title}</title>
        <link rel='icon' href={ArcadeLogo.src} type='image/x-icon' />
      </Head>
      <Flex
        color='white'
        align='center'
        backgroundImage={!isTrivia && ArcadeBG.src}
        backgroundSize={!isTrivia && 'cover'}
        backgroundPosition={!isTrivia && 'center'}
        minH='100vh'
        flexDir='column'
        bg={isTrivia && 'yellow.300'}
        opacity={opacity}
        w='100%'
      >
        <Flex
          borderRadius={15}
          my={5}
          w='100%'
          backdropFilter='blur(10px)'
          bg='whiteAlpha.200'
          justify='center'
        >
          <Heading
            textAlign='center'
            p={5}
            color={isTrivia ? 'black' : 'white'}
          >
            {title}!
          </Heading>
        </Flex>
        <Flex
          backdropFilter='blur(15px)'
          p={5}
          bg='whiteAlpha.200'
          borderRadius={15}
          align='center'
          flexDir='column'
        >
          {!isIndex && (
            <Link href='/'>
              <Text
                _hover={{ textDecor: 'underline' }}
                mb={5}
                color={isTrivia ? 'black' : 'white'}
              >
                Back home
              </Text>
            </Link>
          )}
          <Flex>{children}</Flex>
        </Flex>
        <Footer />
      </Flex>
    </>
  );
};

export default Layout;
