import { Center, useColorModeValue } from '@chakra-ui/react';
import Link from 'next/link';

const Footer = () => {
  return (
    <Center
      pos='absolute'
      bottom={0}
      h='5rem'
      w='100%'
      fontSize={{ base: 'xs', sm: 'sm' }}
      bg='blackAlpha.600'
      px={5}
    >
      &copy; {new Date().getFullYear()} Quiz Games. All rights reserved.
      <span
        style={{
          position: 'absolute',
          right: 5,
          bottom: 4,
          fontWeight: 'bold',
          fontSize: '0.7rem',
        }}
      >
        Diseño:{'  '}
        <Link
          href='https://www.tomasmacia.com.ar'
          target='_blank'
          rel='noreferrer noopener nofollow'
          style={{ color: '#B1D4E0' }}
        >
          Tomás Macía
        </Link>
      </span>
    </Center>
  );
};

export default Footer;
