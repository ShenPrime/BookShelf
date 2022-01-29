import { Flex, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';

export const MotionFlex = ({ children, ...otherProps }) => {
  const MotionFlex = motion(Flex);

  const shadow = useColorModeValue('lg', 'dark-lg');
  const bg = useColorModeValue('gray.100', 'gray.800');
  return (
    <>
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
        {...otherProps}
      >
        {children}
      </MotionFlex>
    </>
  );
};
