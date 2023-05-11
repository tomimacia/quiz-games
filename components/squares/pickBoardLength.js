import {
  Box,
  Button,
  Flex,
  Heading,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
} from "@chakra-ui/react";
import { useState } from "react";

export const PickBoardLength = ({ handleClick }) => {
  const posibleLenghts = [5, 6, 7, 8, 9, 10, 11];
  const [sliderValue, setSliderValue] = useState(7);
  const labelStyles = {
    mt: "2",
    ml: "-2.5",
    fontSize: "sm",
  };
  return (
    <Flex
      p={5}
      borderRadius="10px"
      bg="blackAlpha.700"
      gap={5}
      flexDir="column"
    >
      <Heading as={"h3"} size="md">
        Pick the board length
      </Heading>
      <Slider
        onChange={(val) => setSliderValue(val)}
        mt={10}
        mb={10}
        defaultValue={7}
        min={5}
        max={11}
      >
        {posibleLenghts.map((len) => {
          return (
            <SliderMark key={len} p={1} pt={3} value={len} {...labelStyles}>
              {len}
            </SliderMark>
          );
        })}
        <SliderMark
          value={sliderValue}
          textAlign="center"
          borderRadius="10"
          color="white"
          mt="-46px"
          ml="-3"
          w={sliderValue < 10 ? "25px" : "40px"}
        >
          {sliderValue}
        </SliderMark>
        <SliderTrack bg="blue.200">
          <Box position="relative" right={10} />
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb boxSize={6} />
      </Slider>
      <Button
        onClick={() => handleClick(sliderValue)}
        size="sm"
        bg='white'
        placeSelf="center"
        w="50%"
        className="nes-btn"
        _hover={{ bg: "grey" }}
        color="black"
      >
        Confirm
      </Button>
    </Flex>
  );
};
