import { useEffect, useState } from "react";
import { getLinesArr } from "../functions/connectFour/getLinesArr"
import { checkFour } from "../functions/connectFour/checkFour"

export const useConnectBoardWinner = () => {
  const initialBoard = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
  ];
  const [columns, setColumns] = useState(initialBoard);
  const [playerTurn, setPlayerTurn] = useState(1);
  const [winner, setWinner] = useState(null);
  // handle clicks on board (moves)
  const handleClick = (ind) => {
    if (winner) return;
    for (let i = 6; i >= 0; i--) {
      if (columns[ind][i] === 0) {
        let newColumns = [...columns];
        newColumns[ind][i] = playerTurn;
        setColumns(newColumns);
        setPlayerTurn(playerTurn === 1 ? 2 : 1);
        return;
      }
    }
  };
  // restart board
  const restart = () => {
    setColumns(initialBoard);
    setPlayerTurn(1);
    setWinner(null);
  };
  // When board changes, check if theres a winner
  useEffect(() => {
    // Function getLinesArr to get 3 arrays with current lines
    const allLines = getLinesArr(columns);
    const { horizontal, vertical, diagonals } = allLines;
    checkFour(horizontal) && setWinner(checkFour(horizontal));
    checkFour(vertical) && setWinner(checkFour(vertical));
    checkFour(diagonals) && setWinner(checkFour(diagonals));
    if (horizontal.flat().every((num) => num !== 0) && winner === 0)
      setWinner(3);
  }, [columns]);
  return { columns, playerTurn, winner, restart, handleClick };
};
