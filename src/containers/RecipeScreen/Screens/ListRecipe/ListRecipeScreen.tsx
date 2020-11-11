import React, { FunctionComponent, useState, createContext, useEffect } from 'react';
import { Dimensions, View } from 'react-native';

import CategoriesTitle from './components/CategoriesTitle/CategoriesTitle';

import { SafeAreaView } from 'globalStyles/index';
import { TitleContainer, ListCardsContainer, getStyles } from './style';

import { ListRecipeProps } from './types';
import { Titles } from './config';
import RecipeCards from './components/RecipeCards/RecipeCards';
import { FlatList } from 'react-native-gesture-handler';

const dummy = {
  Breakfast: [
    {
      title: 'Muesli',
      desc: 'Cereals',
      uri: 'https://www.notretemps.com/images/articles/cuisine/recettes/muesli-recette.jpeg',
      isLiked: false,
    },
    {
      title: 'Muesli',
      desc: 'Cereals',
      uri: 'https://www.notretemps.com/images/articles/cuisine/recettes/muesli-recette.jpeg',
      isLiked: false,
    },
    {
      title: 'Muesli',
      desc: 'Cereals',
      uri: 'https://www.notretemps.com/images/articles/cuisine/recettes/muesli-recette.jpeg',
      isLiked: false,
    },
    {
      title: 'Muesli',
      desc: 'Cereals',
      uri: 'https://www.notretemps.com/images/articles/cuisine/recettes/muesli-recette.jpeg',
      isLiked: false,
    },
    {
      title: 'Muesli',
      desc: 'Cereals',
      uri: 'https://www.notretemps.com/images/articles/cuisine/recettes/muesli-recette.jpeg',
      isLiked: false,
    },
    {
      title: 'Muesli',
      desc: 'Cereals',
      uri: 'https://www.notretemps.com/images/articles/cuisine/recettes/muesli-recette.jpeg',
      isLiked: false,
    },
    {
      title: 'Muesli',
      desc: 'Cereals',
      uri: 'https://www.notretemps.com/images/articles/cuisine/recettes/muesli-recette.jpeg',
      isLiked: false,
    },
    {
      title: 'Muesli',
      desc: 'Cereals',
      uri: 'https://www.notretemps.com/images/articles/cuisine/recettes/muesli-recette.jpeg',
      isLiked: false,
    },
    {
      title: 'Muesli',
      desc: 'Cereals',
      uri: 'https://www.notretemps.com/images/articles/cuisine/recettes/muesli-recette.jpeg',
      isLiked: false,
    },
    {
      title: 'Muesli',
      desc: 'Cereals',
      uri: 'https://www.notretemps.com/images/articles/cuisine/recettes/muesli-recette.jpeg',
      isLiked: false,
    },
    {
      title: 'Muesli',
      desc: 'Cereals',
      uri: 'https://www.notretemps.com/images/articles/cuisine/recettes/muesli-recette.jpeg',
      isLiked: false,
    },
    {
      title: 'Muesli',
      desc: 'Cereals',
      uri: 'https://www.notretemps.com/images/articles/cuisine/recettes/muesli-recette.jpeg',
      isLiked: false,
    },
  ],
  Lunch: [
    {
      title: 'Sliced Beef',
      desc: 'Meat',
      uri:
        'https://images.eatthismuch.com/site_media/img/45608_ldementhon_44c4211c-7457-4c40-b8da-28ec25b92b0d.jpg',
      isLiked: false,
    },
    {
      title: 'Sliced Beef',
      desc: 'Meat',
      uri:
        'https://images.eatthismuch.com/site_media/img/45608_ldementhon_44c4211c-7457-4c40-b8da-28ec25b92b0d.jpg',
      isLiked: false,
    },
    {
      title: 'Sliced Beef',
      desc: 'Meat',
      uri:
        'https://images.eatthismuch.com/site_media/img/45608_ldementhon_44c4211c-7457-4c40-b8da-28ec25b92b0d.jpg',
      isLiked: false,
    },
    {
      title: 'Sliced Beef',
      desc: 'Meat',
      uri:
        'https://images.eatthismuch.com/site_media/img/45608_ldementhon_44c4211c-7457-4c40-b8da-28ec25b92b0d.jpg',
      isLiked: false,
    },
    {
      title: 'Sliced Beef',
      desc: 'Meat',
      uri:
        'https://images.eatthismuch.com/site_media/img/45608_ldementhon_44c4211c-7457-4c40-b8da-28ec25b92b0d.jpg',
      isLiked: false,
    },
    {
      title: 'Sliced Beef',
      desc: 'Meat',
      uri:
        'https://images.eatthismuch.com/site_media/img/45608_ldementhon_44c4211c-7457-4c40-b8da-28ec25b92b0d.jpg',
      isLiked: false,
    },
  ],
  Snack: [
    {
      title: 'Butter biscuit',
      desc: 'Biscuit',
      uri:
        'https://www.bakedbyanintrovert.com/wp-content/uploads/2018/10/Basic-Butter-Cookies-Recipe-Image-735x735.jpg',
      isLiked: false,
    },
    {
      title: 'Butter biscuit',
      desc: 'Biscuit',
      uri:
        'https://www.bakedbyanintrovert.com/wp-content/uploads/2018/10/Basic-Butter-Cookies-Recipe-Image-735x735.jpg',
      isLiked: false,
    },
    {
      title: 'Butter biscuit',
      desc: 'Biscuit',
      uri:
        'https://www.bakedbyanintrovert.com/wp-content/uploads/2018/10/Basic-Butter-Cookies-Recipe-Image-735x735.jpg',
      isLiked: false,
    },
    {
      title: 'Butter biscuit',
      desc: 'Biscuit',
      uri:
        'https://www.bakedbyanintrovert.com/wp-content/uploads/2018/10/Basic-Butter-Cookies-Recipe-Image-735x735.jpg',
      isLiked: false,
    },
    {
      title: 'Butter biscuit',
      desc: 'Biscuit',
      uri:
        'https://www.bakedbyanintrovert.com/wp-content/uploads/2018/10/Basic-Butter-Cookies-Recipe-Image-735x735.jpg',
      isLiked: false,
    },
    {
      title: 'Butter biscuit',
      desc: 'Biscuit',
      uri:
        'https://www.bakedbyanintrovert.com/wp-content/uploads/2018/10/Basic-Butter-Cookies-Recipe-Image-735x735.jpg',
      isLiked: false,
    },
  ],
  Diner: [
    {
      title: 'Sliced Beef',
      desc: 'Meat',
      uri:
        'https://images.eatthismuch.com/site_media/img/45608_ldementhon_44c4211c-7457-4c40-b8da-28ec25b92b0d.jpg',
      isLiked: false,
    },
    {
      title: 'Sliced Beef',
      desc: 'Meat',
      uri:
        'https://images.eatthismuch.com/site_media/img/45608_ldementhon_44c4211c-7457-4c40-b8da-28ec25b92b0d.jpg',
      isLiked: false,
    },
    {
      title: 'Sliced Beef',
      desc: 'Meat',
      uri:
        'https://images.eatthismuch.com/site_media/img/45608_ldementhon_44c4211c-7457-4c40-b8da-28ec25b92b0d.jpg',
      isLiked: false,
    },
    {
      title: 'Sliced Beef',
      desc: 'Meat',
      uri:
        'https://images.eatthismuch.com/site_media/img/45608_ldementhon_44c4211c-7457-4c40-b8da-28ec25b92b0d.jpg',
      isLiked: false,
    },
    {
      title: 'Sliced Beef',
      desc: 'Meat',
      uri:
        'https://images.eatthismuch.com/site_media/img/45608_ldementhon_44c4211c-7457-4c40-b8da-28ec25b92b0d.jpg',
      isLiked: false,
    },
    {
      title: 'Sliced Beef',
      desc: 'Meat',
      uri:
        'https://images.eatthismuch.com/site_media/img/45608_ldementhon_44c4211c-7457-4c40-b8da-28ec25b92b0d.jpg',
      isLiked: false,
    },
  ],
};

export const Context = createContext(dummy.Breakfast);

const ListRecipeScreen: FunctionComponent<ListRecipeProps> = ({ navigation }) => {
  const [whoFocused, setWhoFocused] = useState(Titles.breakfast);
  const height = Dimensions.get('window').height;
  const styles = getStyles(height);
  const [data, setData] = useState(dummy[whoFocused]);

  useEffect(() => {
    setData(dummy[whoFocused]);
  }, [whoFocused, dummy]);

  const onPress = (i: number) => {
    const newData = data;
    newData[i].isLiked = !data[i].isLiked;
    setData([...newData]);
  };

  const onNavigate = (index, props) => {
    console.log(props);
    navigation.navigate('RecipeScreen', props);
  };

  return (
    <SafeAreaView>
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
      <Context.Provider value={data}>
        <View style={styles.ScrollViewContainer}>
          <FlatList
            data={data}
            renderItem={({ item, index }) => (
              <RecipeCards key={index} onPress={onPress} index={index} onNavigate={onNavigate} />
            )}
            numColumns={2}
            refreshing
            keyExtractor={(item, index) => `key_${index}`}
          />
        </View>
      </Context.Provider>
    </SafeAreaView>
  );
};

export default ListRecipeScreen;
