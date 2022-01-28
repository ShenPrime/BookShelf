import React, { useState } from 'react';

import {
  Box,
  VStack,
  Center,
  Input,
  Heading,
  InputGroup,
  InputLeftElement,
  Button,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { BsSearch } from 'react-icons/bs';
import axios from 'axios';
import { SearchResultItem } from './components/SearchResultItem';
import { motion } from 'framer-motion';

const apiKey = process.env.REACT_APP_API_KEY;

function App() {
  //Styling
  const bg = useColorModeValue('gray.200', 'gray.800');
  const shadow = useColorModeValue('lg', 'dark-lg');
  const btnBg = useColorModeValue('gray.300', 'gray.700');
  //TODO: set all styling inside a theme

  //Use States
  const [results, setResults] = useState([]);
  const [searchPhrase, setSearchPhrase] = useState('');
  let [index, setIndex] = useState(0);
  let [totalCount, setTotalCount] = useState(0);

  //Framer Motion Components
  const MotionButton = motion(Button);

  //Functions
  const handleChange = e => {
    setSearchPhrase(e.target.value);
  };

  const handleSubmit = async e => {
    setIndex(0);
    setTotalCount(0);
    setSearchPhrase(e.target.search.value);
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${searchPhrase}&key=${apiKey}&startIndex=${index}`
      );
      if (response.data.items.length > 0) {
        setResults(response.data.items);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleLoadMore = async e => {
    setIndex((index += 20));
    setTotalCount((totalCount += 20));
    console.log(index);
    console.log(totalCount);
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${searchPhrase}&key=${apiKey}&startIndex=${index}`
      );
      if (response.data.items.length > 0) {
        setResults(response.data.items);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box backgroundColor={bg} h="100vh">
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
                name="search"
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
      <Flex flexWrap="wrap" justifyContent="center" backgroundColor={bg}>
        {results.map(item => (
          <SearchResultItem item={item} />
        ))}
      </Flex>
      {results.length !== 0 && (
        <Center p={5} height={40} backgroundColor={bg}>
          <Button
            backgroundColor={btnBg}
            boxShadow={shadow}
            onClick={handleLoadMore}
          >
            Load More Books
          </Button>
        </Center>
      )}
    </Box>
  );
}

export default App;
