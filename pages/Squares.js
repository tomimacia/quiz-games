import { Button, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { NameAndColor } from "../components/global/nameAndColor";
import { PickGame } from "../components/global/pickGame";
import { PickBoardLength } from "../components/squares/pickBoardLength";
import { SquaresBoard } from "../components/squares/squaresBoard";
import { useSetPlayer } from "../hooks/useSetPlayer";
import { useSquaresBoardWinner } from "../hooks/useSquaresBoardWinner";

const Squares = () => {
  const [gameMode, setGameMode] = useState(null);
  const { playerOne, playerTwo, showBoard, setPlayer } = useSetPlayer();
  const {
    winnerCoords,
    columns,
    playerTurn,
    winner,
    handleClick,
    restart,
    boardLengthClick,
  } = useSquaresBoardWinner()
  return (
    <Flex
      color="white"
      align="center"
      backgroundImage={`url(/ArcadeBG.jpg)`}
      backgroundSize="cover"
      backgroundPosition="center"
      minH="100vh"
      flexDir="column"
    >
      <Flex flexDir="column">
        <Heading mb={5}>Squares!</Heading>
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
      {showBoard && !columns.length && (
        <PickBoardLength handleClick={boardLengthClick} />
      )}
      {showBoard && columns.length > 0 && (
        <>
          <Button mt={5} className="nes-btn" size="sm" onClick={restart}>
            Reset
          </Button>
          {
            <Text p={2} bg="black" mt={3} size="sm" color="red" as={"h4"}>
              {winner
                ? "Finished"
                : `${(playerTurn === 1 ? playerOne : playerTwo).name} its your
                  turn!`}
            </Text>
          }
          <SquaresBoard
            playerOne={playerOne}
            playerTwo={playerTwo}
            dots={columns}
            click={handleClick}
            winCoords={winnerCoords}
            winner={winner}
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
            size={["sm", "md", "md", "lg"]}
            className="nes-btn"
            onClick={() => restart()}
          >
            Restart game
          </Button>
        </Stack>
      )}
    </Flex>
  );
};

export default Squares;
