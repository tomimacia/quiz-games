import { Flex, Heading, OrderedList, Text } from "@chakra-ui/react";

export const Question = ({  
  question,
  children
}) => {
  return (
    <Flex flexDir='column'>
      <Text color='black' mb={5} fontSize={18}>
        {question}
      </Text>
      <OrderedList color='black' spacing={4}>
        {children}
      </OrderedList>
    </Flex>
  );
};
