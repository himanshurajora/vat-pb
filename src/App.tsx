import {
  ChakraProvider
} from '@chakra-ui/react';
import './App.css';
import { TestComponent } from './components/TestComponent';

function App() {
  return (
    <ChakraProvider>
      <TestComponent />
    </ChakraProvider>
  );
}

export default App;
