import { useEffect, useState } from "react";
import { checkSquares } from "../functions/squares/checkSquares";

export const useSquaresBoardWinner = () => {
  const [initialBoard, setInitialBoard] = useState([]);
  const [winnerCoords, setWinnerCoords] = useState([]);
  const [columns, setColumns] = useState([]);
  const [playerTurn, setPlayerTurn] = useState(1);
  const [winner, setWinner] = useState(null);

  const handleClick = (row, col) => {
    if (winner) return;
    if (columns[row][col] === 0) {
      let newArr = [...columns];
      newArr[row][col] = playerTurn;
      setColumns(newArr);
    }
  };

  // restart board
  const restart = () => {
    const initial = initialBoard.map((l) => [...l]);
    setColumns([...initial]);
    setPlayerTurn(1);
    setWinner(null);
    setWinnerCoords([]);
  };

  // When board changes, check if theres a winner
  const boardLengthClick = (value) => {
    for (let i = 0; i < value; i++) {
      let newArray = [];
      for (let j = 0; j < value; j++) {
        newArray.push(0);
      }
      setColumns((prev) => [...prev, [...newArray]]);
      setInitialBoard((prev) => [...prev, [...newArray]]);
    }
  };

  useEffect(() => {
    // Function getLinesArr to get 3 arrays with current lines
    if (columns) {
      if (columns.flat().every((n) => n === 0)) return;
      const checkWin = checkSquares(columns, columns.length);
      if (checkWin) {
        setWinnerCoords(checkWin);
        setWinner(playerTurn);
      } else setPlayerTurn(playerTurn === 1 ? 2 : 1);
      if (columns.flat().every((num) => num !== 0)) setWinner(3);
    }
  }, [columns]);

  return {
    winnerCoords,
    columns,
    playerTurn,
    winner,
    handleClick,
    restart,
    boardLengthClick,
  };
};
