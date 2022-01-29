import React from 'react';
import { motion } from 'framer-motion';
import { Button, useColorModeValue } from '@chakra-ui/react';
export const MotionButton = ({ children, ...otherProps }) => {
  const MotionButton = motion(Button);
  const shadow = useColorModeValue('lg', 'dark-lg');
  const btnBg = useColorModeValue('gray.300', 'gray.700');
  return (
    <>
      <MotionButton
        boxShadow={shadow}
        whileTap={{ scale: 0.9 }}
        backgroundColor={btnBg}
        {...otherProps}
      >
        {children}
      </MotionButton>
    </>
  );
};
