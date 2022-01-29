import { Box, Center, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

import { motion } from 'framer-motion';
import { InfoText } from './InfoText';

export const Details = ({ results }) => {
  const MotionBox = motion(Box);

  const btnBg = useColorModeValue('gray.300', 'gray.700');
  const shadow = useColorModeValue('lg', 'dark-lg');
  const bg = useColorModeValue('gray.100', 'gray.800');

  return (
    <Center>
      <MotionBox
        animate={{ scale: 1.1 }}
        initialscale={0.5}
        backgroundColor={bg}
        boxShadow={shadow}
        transition={{ duration: 0.5 }}
        w={800}
        borderRadius="lg"
        p={10}
      >
        <Box
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          flex={1}
        >
          <InfoText heading={'Title'} text={results.volumeInfo.title} />
          {results.volumeInfo.subtitle && (
            <InfoText text={results.volumeInfo.subtitle} heading={'Subtitle'} />
          )}
          <InfoText text={results.volumeInfo.authors} heading={'Authors'} />
          <InfoText text={results.volumeInfo.publisher} heading={'Publisher'} />
          <InfoText
            text={results.volumeInfo.publishedDate}
            heading={'Publish date'}
          />
          <InfoText
            text={results.volumeInfo.description}
            heading={'Description'}
          />
          <InfoText
            text={results.volumeInfo.categories}
            heading={'Categories'}
          />
        </Box>
      </MotionBox>
    </Center>
  );
};
