import React, { useState } from 'react';
import { Searchbar } from 'react-native-paper';

export const SearchBar = ({
  onChangeText,
}: {
  onChangeText: (value: string) => void;
}) => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const onChangeSearch = (value: string) => {
    setSearchQuery(value);
    onChangeText(value);
  };
  return (
    <Searchbar
      placeholder="Type a film"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  );
};
