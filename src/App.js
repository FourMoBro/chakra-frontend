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
import { BasicTable } from './components/tables/BasicTable'
import FormikContainerChakra from './components/formik-elements/FormikContainerChakra'





function App() {
  return (
    <ChakraProvider theme={theme}>    
        <FormikContainerChakra />   
    </ChakraProvider>
  );
}

export default App;
