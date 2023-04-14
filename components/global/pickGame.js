import { Heading } from "@chakra-ui/react"

export const PickGame = ({setLan, setOnline}) =>{
    return (
        <>
            <Heading mt={10} as="h2" size="md">
              Pick a game mode
            </Heading>
            <Heading
              m={5}
              bg='blackAlpha.400'
              borderRadius='10px'
              _hover={{ color: "grey" }}
              className="nes-pointer"
              tabIndex='0'
              onKeyDown={(e)=>{
                e.key === "Enter" && setLan("LAN")
              }}
              as="h3"
              size="sm"
              onClick={() => setLan("LAN")}
            >
              Play LAN
            </Heading>
            <Heading
              m={5}
              bg='blackAlpha.400'
              borderRadius='10px' 
              _hover={{ color: "grey" }}
              onKeyDown={(e)=>{
                e.key === "Enter" && setLan("Online")
              }}
              tabIndex='0'
              className="nes-pointer"
              as="h3"
              size="sm"
              onClick={() => setOnline("Online")}
            >
              Play Online
            </Heading>
          </>
    )
}