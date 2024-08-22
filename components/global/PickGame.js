import { Divider, Flex, Heading } from '@chakra-ui/react';

export const PickGame = ({ setLan, setOnline }) => {
  return (
    <Flex border='1px solid gray' flexDir='column' borderRadius={15} p={3}>
      <Heading mt={10} as='h2' size='md'>
        Pick a game mode
      </Heading>
      <Divider borderColor='gray' my={2} />
      <Heading
        m={5}
        borderRadius='10px'
        _hover={{ color: 'grey' }}
        className='nes-pointer'
        tabIndex='0'
        onKeyDown={(e) => {
          e.key === 'Enter' && setLan('LAN');
        }}
        as='h3'
        size='sm'
        onClick={() => setLan('LAN')}
      >
        Play LAN
      </Heading>
      <Heading
        m={5}
        borderRadius='10px'
        _hover={{ color: 'grey' }}
        onKeyDown={(e) => {
          e.key === 'Enter' && setLan('Online');
        }}
        tabIndex='0'
        className='nes-pointer'
        as='h3'
        size='sm'
        onClick={() => setOnline('Online')}
      >
        Play Online
      </Heading>
    </Flex>
  );
};
