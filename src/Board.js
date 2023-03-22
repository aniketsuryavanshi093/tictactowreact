import { useState } from "react";
import { Box } from "./Box";
import { GameInfo } from "./GameInfo";

export const Board = () => {
  const WINNER_COND = [
    [0, 3, 6],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 1, 2],
    [2, 5, 8],
    [1, 4, 7]
  ];
  const [scores, setScores] = useState({ x: 0, o: 0 });
  const [boards, setBoards] = useState(Array(9).fill(null));
  const [isXplaying, setisXplaying] = useState(true);
  const handleBoxclick = (idx) => {
    const board = boards.map((item, index) =>
      index === idx ? (isXplaying ? "X" : "O") : item
    );
    const winner = checkWInner(board);
    if (winner) {
      setScores((prev) => {
        if (winner === "X") {
          setScores({ ...prev, x: prev.x + 1 });
        } else {
          setScores({ ...prev, o: prev.o + 1 });
        }
      });
      setBoards(Array(9).fill(null));
      return;
    }
    setBoards(board);
    setisXplaying(!isXplaying);
  };
  console.log(scores);

  const checkWInner = (board) => {
    for (let i = 0; i < WINNER_COND.length; i++) {
      const [x, y, z] = WINNER_COND[i];
      if (
        board[x] === board[z] &&
        board[x] === board[y] &&
        board[y] === board[z]
      ) {
        return board[x];
      }
    }
  };
  const handleReset = () => {
    setBoards(Array(9).fill(null));
    setScores({ x: 0, o: 0 });
  };
  return (
    <div className="mt-5 container">
      <GameInfo scores={scores} isXplaying={isXplaying} />
      <div className="board">
        {boards.map((board, index) => (
          <Box
            className=""
            value={board}
            index={index}
            handleClick={handleBoxclick}
          />
        ))}
      </div>
      <div className="w-full d-flex justify-content-center">
        <button
          onClick={handleReset}
          type="button"
          class="btn mt-1  btn-outline-primary"
        >
          Reset
        </button>
      </div>
    </div>
  );
};
