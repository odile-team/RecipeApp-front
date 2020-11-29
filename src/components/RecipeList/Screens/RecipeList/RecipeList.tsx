import React, { createContext } from 'react';
import { Dimensions, View } from 'react-native';

import { getStyles } from './style';

import RecipeCards from './components/RecipeCards/RecipeCards';
import { FlatList } from 'react-native-gesture-handler';
import { RecipeListProps } from './types';

const RecipeList = ({ navigation, data, sendRoute }: RecipeListProps): JSX.Element => {
  const Context = createContext(data);
  const height = Dimensions.get('window').height;
  const styles = getStyles(height);

  const onPress = () => {
    console.log('record like in the back');
  };

  const onNavigate = (index, props) => {
    sendRoute('RecipeScreen');
    navigation.navigate('RecipeScreen', props);
  };

  return (
    <Context.Provider value={data}>
      <View style={styles.ScrollViewContainer}>
        <FlatList
          data={data}
          renderItem={({ item, index }) => (
            <RecipeCards
              key={index}
              onPress={onPress}
              index={index}
              onNavigate={onNavigate}
              Context={Context}
            />
          )}
          numColumns={2}
          refreshing
          keyExtractor={(item, index) => `key_${index}`}
        />
      </View>
    </Context.Provider>
  );
};

export default RecipeList;
