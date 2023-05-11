import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import { getColor } from "../../functions/getColor";
import { motion } from "framer-motion";
export const SquaresBoard = ({
  dots,
  click,
  playerOne,
  playerTwo,
  winCoords,
  winner,
}) => {
  const [hover, setHover] = useState(0);
  const onMouseOver = (value) => {
    if (!winner) setHover(value);
  };
  const getOpacity = (col, row) => {
    if (winCoords.map((co) => co + "").some((c) => c === [col, row] + "")) {
      return 1;
    } else return 0.5;
  };

  return (
    <>
      {dots && (
        <Flex
          h={`70%`}
          w={`70%`}
          minW={["95vw", 0, 0, 0]}
          maxW={["60vh"]}
          maxH={["60vh"]}
          bg="blackAlpha.800"
          mt={6}
        >
          <svg viewBox="0 0 320 320" height="100%" width="100%">
            {dots.map((line, row) => {
              return (
                <g key={row * 100}>
                  {line.map((dot, col) => {
                    const color = getColor(
                      dot,
                      playerOne,
                      playerTwo,
                      winCoords
                    );

                    return (
                      <circle
                        key={row + "" + col}
                        cx={(row * 320) / (dots.length - 0.5) + 10}
                        cy={(col * 320) / (dots.length - 0.5) + 10}
                        r={
                          hover === row + "" + col || color !== "white"
                            ? 17 - dots.length
                            : 15 - dots.length
                        }
                        fill={color}
                        onMouseOver={() => onMouseOver(row + "" + col)}
                        onMouseLeave={() => setHover("")}
                        stroke="black"
                        style={{ padding: 20 }}
                        onClick={() => click(row, col)}
                        opacity={winner ? getOpacity(col, row) : 1}
                      />
                    );
                  })}
                </g>
              );
            })}
            {winCoords.length && (
              <>
                {winCoords.map((cord, i) => {
                  return (
                    <motion.line
                      initial={{
                        scale: 0,
                        opacity: 0,
                      }}
                      transition={{
                        delay: i * 0.3,
                      }}
                      animate={{
                        scale: 1,
                        opacity: 1,
                      }}
                      key={cord}
                      y1={(winCoords[i][0] * 320) / (dots.length - 0.5) + 10}
                      x1={(winCoords[i][1] * 320) / (dots.length - 0.5) + 10}
                      y2={
                        (winCoords[i !== 3 ? i + 1 : 0][0] * 320) /
                          (dots.length - 0.5) +
                        10
                      }
                      x2={
                        (winCoords[i !== 3 ? i + 1 : 0][1] * 320) /
                          (dots.length - 0.5) +
                        10
                      }
                      strokeLinejoin="round"
                      strokeWidth={17 - dots.length}
                      stroke={winner === 1 ? playerOne.color : playerTwo.color}
                    />
                  );
                })}
              </>
            )}
          </svg>
        </Flex>
      )}
    </>
  );
};
