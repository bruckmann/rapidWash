import Routes from './Routes';
import { ChakraProvider, theme } from '@chakra-ui/react';

const myTheme = {
  ...theme,
  styles: {
    global: {
      body: {
        backgroundColor: "#e3e1e1",
        margin: "0",
        boxSizing: "border-box",
        fontFamily: 'Roboto',
      },
    }
  }
};

const App = () => {
 return(
  <ChakraProvider theme={myTheme}>
    <Routes />
  </ChakraProvider>
 )
}

export default App;
