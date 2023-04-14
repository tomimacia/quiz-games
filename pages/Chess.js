import { Flex, Heading } from "@chakra-ui/react";
import Link from "next/link";

const Chess = () => {
  return (
    <Flex flexDir='column'>
      <Heading>Chess</Heading>
      <Link href='/'>Back home</Link>
    </Flex>
  );
};

export default Chess;
