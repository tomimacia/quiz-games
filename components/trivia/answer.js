import { ListItem } from "@chakra-ui/react";

export const Answer = ({ answerBg, clickAnswer, a }) => {
  return (
    <ListItem
      userSelect='none'
      className="nes-pointer"
      bg={answerBg}
      onClick={clickAnswer}
      fontSize={25}
    >
      {a}
    </ListItem>
  );
};
