import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import LoginView from '../src/views/auth/LoginView'




function App() {
  return (
    <ChakraProvider theme={theme}>    
        <LoginView />   
    </ChakraProvider>
  );
}

export default App;
