import { extendTheme } from "@chakra-ui/react";
import "@fontsource/press-start-2p/400.css";
import "nes.css/css/nes.min.css";

const theme = extendTheme({
  fonts: {
    body: "'Press Start 2P'",
    heading: "'Press Start 2P'",
  },
  components: {
    Button: {
      color: {
        _hover: "red",
      },
    },
  },
});

export default theme;
