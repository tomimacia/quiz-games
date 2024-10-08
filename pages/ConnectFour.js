import { Flex, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { useState } from 'react';
import { ConnectFourBoard } from '../components/connectFour/ConnectFourBoard';
import { NameAndColor } from '../components/global/NameAndColor';
import { PickGame } from '../components/global/PickGame';
import { RestartGame } from '../components/global/RestartGame';
import { useConnectBoardWinner } from '../hooks/useConnectBoardWinner';
import { useSetPlayer } from '../hooks/useSetPlayer';
import Layout from '../components/Layout';
const ConnectFour = () => {
  const [gameMode, setGameMode] = useState(null);
  const { playerOne, playerTwo, showBoard, setPlayer } = useSetPlayer();
  const { columns, playerTurn, winner, restart, handleClick } =
    useConnectBoardWinner();

  return (
    <Layout title='Connect Four'>
      <Flex gap={3}>
        {!showBoard && (
          <PickGame setLan={setGameMode} setOnline={setGameMode} />
        )}

        {gameMode === 'LAN' &&
          !showBoard &&
          (!playerOne.name ? (
            <NameAndColor num={1} submit={setPlayer} />
          ) : (
            <NameAndColor remove={playerOne.color} num={2} submit={setPlayer} />
          ))}
      </Flex>
      {showBoard && (
        <Flex flexDir='column'>
          {
            <Text
              p={2}
              bg='blackAlpha.700'
              borderRadius={5}
              mt={3}
              size='sm'
              color='red'
              as={'h4'}
            >
              {winner
                ? 'Finished'
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
        </Flex>
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
