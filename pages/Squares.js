import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";
import { NameAndColor } from "../components/global/NameAndColor";
import { PickGame } from "../components/global/PickGame";
import { RestartGame } from "../components/global/RestartGame";
import { PickBoardLength } from "../components/squares/PickBoardLength";
import { SquaresBoard } from "../components/squares/SquaresBoard";
import { useSetPlayer } from "../hooks/useSetPlayer";
import { useSquaresBoardWinner } from "../hooks/useSquaresBoardWinner";
import Layout from "../components/Layout";

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
  } = useSquaresBoardWinner();
  return (
    <Layout title="Squares">
      {!showBoard && <PickGame setLan={setGameMode} setOnline={setGameMode} />}

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
          <Button
            mt={5}
            bg="white"
            className="nes-btn"
            size="sm"
            onClick={restart}
          >
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
      <RestartGame
        winner={winner}
        playerOne={playerOne}
        playerTwo={playerTwo}
        restart={restart}
      />
    </Layout>
  );
};

export default Squares;
