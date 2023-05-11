import { Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";
import { ConnectFourBoard } from "../components/connectFour/ConnectFourBoard";
import { NameAndColor } from "../components/global/NameAndColor";
import { PickGame } from "../components/global/PickGame";
import { RestartGame } from "../components/global/RestartGame";
import { useConnectBoardWinner } from "../hooks/useConnectBoardWinner";
import { useSetPlayer } from "../hooks/useSetPlayer";
import Layout from "../components/Layout";
const ConnectFour = () => {
  const [gameMode, setGameMode] = useState(null);
  const { playerOne, playerTwo, showBoard, setPlayer } = useSetPlayer();
  const { columns, playerTurn, winner, restart, handleClick } =
    useConnectBoardWinner();

  return (
    <Layout title='Connect Four'>
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
      <RestartGame
        winner={winner}
        playerOne={playerOne}
        playerTwo={playerTwo}
        restart={restart}
      />
    </Layout>
  );
};

export default ConnectFour;
