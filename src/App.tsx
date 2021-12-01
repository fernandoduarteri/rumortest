import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"
import Search from "./components/Search"
import LeftMenu from "./components/LeftMenu"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box  fontSize="xl" display="flex"> 
      
          <LeftMenu /> 
          <Search />
       
    </Box>
  </ChakraProvider>
)
