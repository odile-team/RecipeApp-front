import React, { FunctionComponent } from 'react';
import { Dimensions, View } from 'react-native';

import CategoriesTitle from './components/CategoriesTitle/CategoriesTitle';

import { SafeAreaView } from 'globalStyles/index';
import { TitleContainer, ListCardsContainer, getStyles } from './style';

import { ListRecipeProps } from './types';
import { Titles } from './config';
import RecipeCards from './components/RecipeCards/RecipeCards';
import { ScrollView } from 'react-native-gesture-handler';

const ListRecipeScreen: FunctionComponent<ListRecipeProps> = () => {
  const [whoFocused, setWhoFocused] = React.useState(Titles.breakfast);
  const [isLiked, setIsLiked] = React.useState(false);
  const height = Dimensions.get('window').height;
  const styles = getStyles(height);

  const onPress = () => {
    setIsLiked(!isLiked);
  };

  return (
    <SafeAreaView>
      <>
        <TitleContainer>
          {Object.keys(Titles).map((key: string) => {
            return (
              <CategoriesTitle
                key={key}
                title={Titles[key]}
                whoFocused={whoFocused}
                onPress={setWhoFocused}
              />
            );
          })}
        </TitleContainer>
        <View style={styles.ScrollViewContainer}>
          <ScrollView>
            <ListCardsContainer>
              <RecipeCards isLiked={isLiked} onPress={onPress} />
              <RecipeCards isLiked={isLiked} onPress={onPress} />
              <RecipeCards isLiked={isLiked} onPress={onPress} />
              <RecipeCards isLiked={isLiked} onPress={onPress} />
              <RecipeCards isLiked={isLiked} onPress={onPress} />
              <RecipeCards isLiked={isLiked} onPress={onPress} />
            </ListCardsContainer>
          </ScrollView>
        </View>
      </>
    </SafeAreaView>
  );
};

export default ListRecipeScreen;
