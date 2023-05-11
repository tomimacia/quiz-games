import { Button, Heading, Stack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

export const RestartGame = ({ winner,playerOne,playerTwo,restart }) => {


  if (winner)
    return (
      <Stack
        as={motion.div}
        zIndex={10}
        position="absolute"
        spacing={10}
        mt="160px"
        initial={{ y: -500 }}
        animate={{ y: 50 }}
        transitionDuration={"2.5s"}
        p={5}
        minW="350px"
        borderRadius="20px"
        bg={"blackAlpha.500"}
      >
        <Heading fontSize={["20px", "25px", "25px", "30px"]}>
          {winner === 3
            ? "Its a tie!"
            : `The Winner is ${(winner === 1 ? playerOne : playerTwo).name}`}
        </Heading>

        <Button
          alignSelf="center"
          w="60%"
          bg="white"
          size={["sm", "md", "md", "lg"]}
          className="nes-btn"
          onClick={restart}
        >
          Restart game
        </Button>
      </Stack>
    );
};
