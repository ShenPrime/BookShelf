import React, { useEffect, useState } from 'react';

import {
  Box,
  Flex,
  Image,
  Link,
  Modal,
  ModalContent,
  useDisclosure,
  ModalOverlay,
} from '@chakra-ui/react';

import { Details } from './Details';
import axios from 'axios';
import { InfoText } from './InfoText';
import { MotionButton } from './MotionButton';
import { MotionFlex } from './MotionFlex';

//TODO: REFACTOR THIS ENTIRE COMPONENT TO HAVE CLEANER CODE. SPLIT INTO SMALLER COMPONENTS

export const SearchResultItem = ({ item }) => {
  //State Variables

  const [results, setResults] = useState([]);

  //Book Variables

  const id = item.id;
  const title = item.volumeInfo.title;
  const author = item.volumeInfo.authors;
  const volumeInfo = item.volumeInfo;
  const pageCount = item.volumeInfo.pageCount;

  const googleLink = `https://www.google.com/books/edition/ /${id}?&kptab=getbook`;

  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(item.selfLink);
      if (response.data) {
        setResults(response.data);
      }
    };
    getData();
  }, [item.selfLink]);

  return (
    <Flex>
      <MotionFlex>
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
          <InfoText heading={'Title'} text={title} />
          <InfoText heading={'Author'} text={author} />
          <InfoText heading={'Page Count'} text={pageCount} />
          <Flex marginTop={6} justifyContent="center">
            <Link href={googleLink} isExternal>
              <MotionButton marginLeft={3} marginRight={3}>
                Buy it
              </MotionButton>
            </Link>

            <MotionButton onClick={onOpen}>Details</MotionButton>
          </Flex>
        </Box>
      </MotionFlex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <Details results={results} />
        </ModalContent>
      </Modal>
    </Flex>
  );
};
