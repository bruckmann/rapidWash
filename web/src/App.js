import Routes from './Routes';
import { ChakraProvider, theme } from '@chakra-ui/react';

const myTheme = {
  ...theme,
  styles: {
    global: {
      body: {
        background: "url(https://images.wallpaperscraft.com/image/ferrari_rear_view_red_121860_3840x2400.jpg) no-repeat center center",
        margin: "0",
        boxSizing: "border-box",
        fontFamily: 'Roboto',
      },
    }
  }
};

const App = () => {
 return(
  <ChakraProvider theme={myTheme} resetCSS>
    <Routes />
  </ChakraProvider>
 )
}

export default App;
