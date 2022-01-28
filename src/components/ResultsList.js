import { Button, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { SearchResultItem } from './SearchResultItem';

export const ResultsList = ({ results, handleLoadMore, totalCount }) => {
  const bg = useColorModeValue('gray.200', 'gray.800');

  return (
    <Flex flexWrap="wrap" justifyContent="center" backgroundColor={bg}>
      {results.map(item => (
        <SearchResultItem
          key={item.id}
          title={item.volumeInfo.title}
          author={item.volumeInfo.authors}
          pageCount={item.volumeInfo.pageCount}
          volumeInfo={item.volumeInfo}
          id={item.id}
        />
      ))}
    </Flex>
  );
};
