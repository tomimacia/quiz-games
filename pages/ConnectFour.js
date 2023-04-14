import { Button, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { ConnectFourBoard } from "../components/connectFour/connectFourBoard";
import { NameAndColor } from "../components/global/nameAndColor";
import { PickGame } from "../components/global/pickGame";
import { useConnectBoardWinner } from "../hooks/useConnectBoardWinner";
import { useSetPlayer } from "../hooks/useSetPlayer";

const ConnectFour = () => {
  const [gameMode, setGameMode] = useState(null);
  const { playerOne, playerTwo, showBoard, setPlayer } = useSetPlayer();
  const { columns, playerTurn, winner, restart, handleClick } =
    useConnectBoardWinner();

  return (
    <Flex
      color="white"
      align="center"
      backgroundImage={`url(/ArcadeBG.jpg)`}
      minH="100vh"
      backgroundSize="cover"
      backgroundPosition="center"
      flexDir="column"
    >
      <Flex flexDir="column">
        <Heading mb={5}>Connect Four!</Heading>
        {!showBoard && (
          <PickGame setLan={setGameMode} setOnline={setGameMode} />
        )}
      </Flex>
      <Link href="/">Back home</Link>
      {gameMode === "LAN" &&
        !showBoard &&
        (!playerOne.name ? (
          <NameAndColor num={1} submit={setPlayer} />
        ) : (
          <NameAndColor remove={playerOne.color} num={2} submit={setPlayer} />
        ))}
      {showBoard && (
        <>
          {
            <Text p={2} bg="black" mt={3} size="sm" color="red" as={"h4"}>
              {winner
                ? "Finished"
                : `${(playerTurn === 1 ? playerOne : playerTwo).name} its your
              turn!`}
            </Text>
          }
          <ConnectFourBoard
            winner={winner}
            playerOne={playerOne}
            playerTwo={playerTwo}
            cols={columns}
            click={handleClick}
          />
        </>
      )}
      {winner && (
        <Stack
          as={motion.div}
          zIndex={10}
          position="absolute"
          spacing={10}
          mt="160px"
          initial={{ y: -500 }}
          animate={{ y: 50 }}
          transitionDuration={"1s"}
          p={5}
          borderRadius="20px"
          bg={"blackAlpha.500"}
        >
          <Heading>
            {winner === 3
              ? "Its a tie!"
              : `The Winner is ${(winner === 1 ? playerOne : playerTwo).name}`}
          </Heading>

          <Button
            alignSelf="center"
            w="60%"
            className="nes-btn"
            onClick={restart}
          >
            Restart game
          </Button>
        </Stack>
      )}
    </Flex>
  );
};

export default ConnectFour;
