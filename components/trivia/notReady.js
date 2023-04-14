import { Button, Flex, Heading } from '@chakra-ui/react'
import React from 'react'

export const NotReady = ({callback}) => {
  return (
    <Flex mt={20} placeContent="center">
          <Flex gap={10} flexDir="column">
            <Heading>Welcome!</Heading>
            <Heading size="md">Are you ready?</Heading>            
            <Button
              placeSelf="center"
              size="sm"
              w="50%"
              onClick={callback}
              className="nes-btn"
            >
              Start
            </Button>
          </Flex>
        </Flex>
  )
}


