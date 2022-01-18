import {
  Box,
  VStack,
  Center,
  Input,
  Heading,
  InputGroup,
  InputLeftElement,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { BsSearch } from 'react-icons/bs';
import axios from 'axios';
import { useState } from 'react';
import { ResultsList } from './components/ResultsList';
import { motion } from 'framer-motion';

const apiKey = 'AIzaSyBqXO65m7Lb3iQqxv9x0pITAB6iwJ_HAh8';

function App() {
  //Styling
  const bg = useColorModeValue('gray.200', 'gray.800');
  const shadow = useColorModeValue('lg', 'dark-lg');

  //Use States
  const [results, setResults] = useState([]);
  const [searchPhrase, setSearchPhrase] = useState('');

  //Framer Motion Components
  const MotionButton = motion(Button);

  //Functions
  const handleChange = e => {
    setSearchPhrase(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${searchPhrase}&key=${apiKey}&maxResults=40`
      );

      setResults(response.data.items);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box backgroundColor={bg} height="100vh">
      <ColorModeSwitcher m={5} />
      <Center height="500">
        <VStack>
          <Heading marginBottom="20" size="3xl" color="red.400">
            Welcome to BookShelf
          </Heading>
          <form style={{ width: '100%' }} onSubmit={handleSubmit}>
            <InputGroup>
              <InputLeftElement
                marginTop="1"
                pointerEvents="none"
                children={<BsSearch />}
              />
              <Input
                onChange={handleChange}
                mr={6}
                boxShadow={shadow}
                variant="filled"
                size="lg"
                placeholder="Enter book title, author name, or ISBN"
              ></Input>
              <MotionButton
                whileTap={{ scale: 1.2 }}
                alignSelf="center"
                boxShadow="lg"
                variant="filled"
                bg="red.400"
                type="submit"
              >
                Search
              </MotionButton>
            </InputGroup>
          </form>
        </VStack>
      </Center>
      {results.length !== 0 && <ResultsList results={results} />}
    </Box>
  );
}

export default App;
