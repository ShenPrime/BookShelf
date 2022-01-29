import { Heading, Text } from '@chakra-ui/react';
import React from 'react';

export const InfoText = ({ text, heading }) => {
  return (
    <>
      <Heading marginBottom={2} color="red.400" size="sm">
        {heading}
      </Heading>
      <Text marginBottom={2}>{text}</Text>
    </>
  );
};
