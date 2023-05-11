import { Button, Flex, Heading, Input, Text } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

export const NameAndColor = ({ submit, num, remove }) => {
  const [color, setColor] = useState();
  const [name, setName] = useState();
  const colors = ["blue", "red", "yellow", "green"];
  const inputRef = useRef();
  const buttonRef = useRef();
  const onChange = (e) => {
    setName(e.target.value);
  };
  const handleColor = (c) => {
    setColor(c);
  };
  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.focus();
    }
  }, [color]);
  const focusName = () => {
    inputRef.current.focus();
    if(color){
      inputRef.current.value = "";
    }
  };
  useEffect(()=>{
    inputRef.current.focus();
  },[])
  return (
    <Flex
      p={6}
      m={5}
      borderRadius="10px"
      bg="blackAlpha.700"
      gap={5}
      flexDir="column"
      maxW='85vw'
    >
      <Heading size={['md','md','md','xl']}>Player {num}</Heading>
      <Text fontSize={['sm','sm','lg','xl']}>Pick your name</Text>
      <Input ref={inputRef} onChange={onChange} />
      <Text>Pick your color</Text>
      <Flex gap={5} flexWrap="wrap">
        {colors.map((c) => {
          if (c === remove) return;
          return (
            <Button
              tabIndex="0"
              key={c}
              bg={c}
              opacity={c === color && 0.6}
              _hover={{ opacity: 0.5 }}
              border={c === color && "3px solid white"}
              className="nes-pointer"
              borderRadius="50%"
              h={["40px","40px","50px","60px"]}
              w={["40px","40px","50px","60px"]}
              onClick={() => handleColor(c)}
            />
          );
        })}
      </Flex>
      <Button
        ref={buttonRef}
        onClick={() => {
          submit(num, name, color);
          focusName(remove);
        }}
        _hover={{ bg: "grey" }}
        color="black"
        className="nes-btn"
        bg='white'
      >
        Confirm
      </Button>
    </Flex>
  );
};
