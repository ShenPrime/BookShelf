import { Box, Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

import { motion } from 'framer-motion';



export const Details = ({item}) => {
  const MotionBox = motion(Box);


  const shadow = useColorModeValue('lg', 'dark-lg');
  const btnBg = useColorModeValue('gray.300', 'gray.700');
  const bg = useColorModeValue('gray.100', 'gray.800');

  return (
    <MotionBox
      animate={{ scale: 1.1 }}
      initiaScale={0.5}
      backgroundColor={bg}
      boxShadow={shadow}
      transition={{ duration: 0.5 }}
      h={600}
      w={600}
      borderRadius="lg"
      p={10}
    >
    <Box justifyContent='center' alignItems='center' objectFit='contain' textAlign='center'>
    <Heading marginBottom={2} color="red.400" size='sm'>
      Title 
    </Heading>
    <Text marginBottom={2}>{item.volumeInfo.title}</Text>
    </Box>
    </MotionBox>
  );
};
