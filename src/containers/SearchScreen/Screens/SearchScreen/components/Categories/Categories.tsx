import React from 'react';
import { FlatList } from 'react-native-gesture-handler';

import SingleCategory from '../SingleCategory/SingleCategory';

import { AllCategoriesContainer } from './styles';
import { CategoriesProps } from './types';

const Categories = ({ categories, navigate }: CategoriesProps): JSX.Element => {
  return (
    <AllCategoriesContainer>
      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <SingleCategory title={item.title} uri={item.uri} onNavigate={navigate} />
        )}
        keyExtractor={(categories, index) => `categories_${index}`}
      />
    </AllCategoriesContainer>
  );
};

export default Categories;
