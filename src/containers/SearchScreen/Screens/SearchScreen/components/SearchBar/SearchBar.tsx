import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { SearchBarContainer, SearchInput } from './styles';
import { colors } from 'globalStyles/color';
import { SearchProps } from './types';

const SearchBar = ({ onSearch }: SearchProps): JSX.Element => {
  const [searchText, setSearchText] = useState('');

  return (
    <SearchBarContainer>
      <TouchableOpacity onPress={() => onSearch(searchText)}>
        <AntDesign name="search1" size={20} color={colors.mainBlue} />
      </TouchableOpacity>
      <SearchInput
        value={searchText}
        onChangeText={setSearchText}
        onSubmitEditing={() => onSearch(searchText)}
      />
    </SearchBarContainer>
  );
};

export default SearchBar;
