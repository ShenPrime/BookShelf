import React from 'react';

import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Text,
  useColorModeValue,
  Modal,
  ModalContent,
  useDisclosure,
  ModalOverlay,
} from '@chakra-ui/react';

import { motion } from 'framer-motion';
import { Details } from './Details';

//TODO: REFACTOR THIS ENTIRE COMPONENT TO HAVE CLEANER CODE. SPLIT INTO SMALLER COMPONENTS

export const SearchResultItem = ({ item }) => {
  
  //Book Variables 

  const id = item.id; 
  const title = item.volumeInfo.title; 
  const author = item.volumeInfo.authors; 
  const volumeInfo = item.volumeInfo; 
  const pageCount = item.volumeInfo.pageCount; 

  //TODO: Move these values into a dedicated theme 
  const shadow = useColorModeValue('lg', 'dark-lg');
  const btnBg = useColorModeValue('gray.300', 'gray.700');
  const bg = useColorModeValue('gray.100', 'gray.800');

  const MotionFlex = motion(Flex);
  const MotionButton = motion(Button);
  const googleLink = `https://www.google.com/books/edition/ /${id}?&kptab=getbook`;

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex>
      <MotionFlex
        whileHover={{ scale: 1.2 }}
        transition={{ duration: 0.3 }}
        w={450}
        h={400}
        m={10}
        rounded="md"
        p={3}
        boxShadow={shadow}
        background={bg}
        justifyContent="center"
        alignItems="center"
        objectFit="contain"
      >
        <Box flex={0.5} objectFit="contain">
          {volumeInfo.imageLinks ? (
            <Image
              src={volumeInfo.imageLinks.thumbnail}
              alt="Book cover"
              borderRadius={4}
              w="100%"
            />
          ) : (
            <Image
              src="https://static.wikia.nocookie.net/kaguyasama-wa-kokurasetai/images/0/01/No-Cover.png/revision/latest?cb=20210811223928"
              alt="no cover found"
              borderRadius={4}
              w={200}
            />
          )}
        </Box>
        <Box
          textAlign="center"
          width="100%"
          flex="0.5"
          p={2}
          justifyContent="center"
        >
          <Heading marginBottom={2} color="red.400" size="sm">
            Title:
          </Heading>
          <Text marginBottom={2}>{title}</Text>
          <Heading marginBottom={2} color="red.400" size="sm">
            Author:
          </Heading>
          <Text marginBottom={2}>{author}</Text>
          <Heading marginBottom={2} color="red.400" size="sm">
            Page Count
          </Heading>
          <Text marginBottom={2}>{pageCount} p</Text>
          <Flex marginTop={6} justifyContent="center">
            <Link href={googleLink} isExternal>
              <MotionButton
                boxShadow={shadow}
                whileTap={{ scale: 0.9 }}
                backgroundColor={btnBg}
                marginLeft={3}
                marginRight={3}
              >
                Buy it
              </MotionButton>
            </Link>

            <MotionButton
              onClick={onOpen}
              boxShadow={shadow}
              whileTap={{ scale: 0.9 }}
              backgroundColor={btnBg}
            >
              Details
            </MotionButton>
          </Flex>
        </Box>
      </MotionFlex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <Details item={item}/>
        </ModalContent>
      </Modal>
    </Flex>
  );
};
