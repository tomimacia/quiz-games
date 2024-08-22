import { Flex, Stack, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { RxDoubleArrowDown } from 'react-icons/rx';
import { motion } from 'framer-motion';
import { getColor } from '../../functions/getColor';

export const ConnectFourBoard = ({
  click,
  cols,
  playerOne,
  playerTwo,
  winner,
}) => {
  const [arrow, setArrow] = useState(0);

  return (
    <Flex align='center' flexDir='column'>
      <Flex
        mt={10}
        mb={5}
        justify='space-between'
        align='center'
        h='50px'
        w={['380px', '380px', '440px', '500px']}
        maxW='95vw'
      >
        {cols.map((_, i) => {
          return i + 1 === arrow && !winner ? (
            <Flex
              spacing={0}
              as={motion.div}
              key={i + 100}
              animate={{
                scale: [1, 1.2, 1, 1],
              }}
              fontSize='24px'
              align='center'
              flexDir='column'
            >
              <Text>{i + 1}</Text>
              <RxDoubleArrowDown size='30px' />
            </Flex>
          ) : (
            <Flex />
          );
        })}
      </Flex>
      <Flex
        // pos='absolute'
        h={['370px', '370px', '440px', '490px']}
        w={['420px', '420px', '490px', '570px']}
        maxW='95vw'
        borderRadius='10px'
        bg='blackAlpha.600'
        justify='center'
        align='center'
      >
        {cols.map((row, i) => {
          return (
            <Stack
              as={motion.div}
              key={12121 + i}
              className='nes-pointer'
              onClick={() => click(i)}
              align='center'
              animate={{ opacity: winner ? 0.5 : 1 }}
              transitionDuration={'1s'}
              onMouseOver={() => setArrow(i + 1)}
              onMouseOut={() => setArrow(0)}
              zIndex={1}
              spacing={2}
            >
              {row.map((r, ind) => {
                return (
                  <Flex
                    as={motion.div}
                    key={ind + r * 10}
                    justify='center'
                    initial={r !== 0 && { y: -80 * (ind + 1) }}
                    animate={
                      r !== 0 && {
                        y: 0,
                      }
                    }
                    transitionDuration={'0.1s'}
                    align='center'
                    borderRadius='50%'
                    bg={() => getColor(r, playerOne, playerTwo)}
                    h={['50px', '50px', '60px', '70px']}
                    w={['50px', '50px', '60px', '70px']}
                    m={1}
                  />
                );
              })}
            </Stack>
          );
        })}
      </Flex>
    </Flex>
  );
};
