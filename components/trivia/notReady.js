import { Button, Flex, Heading } from '@chakra-ui/react'
import React from 'react'

export const NotReady = ({callback}) => {
  return (
    <Flex mt={[5,10,15,20]} placeContent="center">
          <Flex gap={10} flexDir="column">
            <Heading color='black'>Welcome!</Heading>
            <Heading size="md" color='black'>Are you ready?</Heading>            
            <Button
              placeSelf="center"
              size="sm"
              w="50%"
              onClick={callback}
              className="nes-btn"
              bg='white'
            >
              Start
            </Button>
          </Flex>
        </Flex>
  )
}


