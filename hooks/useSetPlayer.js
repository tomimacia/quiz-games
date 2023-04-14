import { useEffect, useState } from "react";
import { useToast } from "@chakra-ui/react";

export const useSetPlayer = () => {
  const toast = useToast()
  const [showBoard, setShowBoard] = useState(false);
  const [playerOne, setPlayerOne] = useState({ name: "", color: "" });
  const [playerTwo, setPlayerTwo] = useState({ name: "", color: "" });

  const setPlayer = (num, name, color) => {
    if (!name || name.lenght === 0) {
      toast({
        title: `Please select a name`,
        status: "error",
        isClosable: true,
      });
      return;
    }
    if (name === playerOne.name) {
      toast({
        title: `Please select a different name`,
        status: "error",
        isClosable: true,
      });
      return;
    }

    if (!color || color === playerOne.color) {
      toast({
        title: `Please pick a color`,
        status: "error",
        isClosable: true,
      });
      return;
    }
    if (num === 1) {
      setPlayerOne({ name: name, color: color });
    } else setPlayerTwo({ name: name, color: color });
  };
  useEffect(() => {
    if (playerTwo.color) setShowBoard(true);
  }, [playerTwo]);

  return { playerOne, playerTwo, showBoard, setPlayer };
};
