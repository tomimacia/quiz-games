import { Heading, OrderedList } from "@chakra-ui/react";

export const Question = ({  
  question,
  children
}) => {
  return (
    <>
      <Heading mb={5} fontSize={20}>
        {question}
      </Heading>
      <OrderedList spacing={10}>
        {children}
      </OrderedList>
    </>
  );
};
