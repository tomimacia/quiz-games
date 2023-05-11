import { ListItem } from "@chakra-ui/react";

export const Answer = ({ answerBg, clickAnswer, a }) => {
  return (
    <ListItem
      userSelect="none"
      className="nes-pointer"
      bg={answerBg}
      onClick={clickAnswer}
      borderRadius="10px"
      p={1}
      m="auto 0"
      w="80%"
      fontSize={15}
    >
      {a}
    </ListItem>
  );
};
