import React, { FunctionComponent, useState, createContext, useEffect } from 'react';
import { Dimensions, View } from 'react-native';

import CategoriesTitle from './components/CategoriesTitle/CategoriesTitle';

import { SafeAreaView } from 'globalStyles/index';
import { TitleContainer, getStyles } from './style';

import { ListRecipeProps } from './types';
import { Titles } from './config';
import RecipeCards from './components/RecipeCards/RecipeCards';
import { FlatList } from 'react-native-gesture-handler';
import FadeInEntrance from 'components/FadeInEntrance/FadeInEntrance';

const dummy = {
  Matin: [
    {
      title: 'Muesli',
      desc: 'Céréales',
      uri: 'https://www.notretemps.com/images/articles/cuisine/recettes/muesli-recette.jpeg',
      isLiked: false,
    },
    {
      title: 'Muesli',
      desc: 'Céréales',
      uri: 'https://www.notretemps.com/images/articles/cuisine/recettes/muesli-recette.jpeg',
      isLiked: false,
    },
    {
      title: 'Muesli',
      desc: 'Céréales',
      uri: 'https://www.notretemps.com/images/articles/cuisine/recettes/muesli-recette.jpeg',
      isLiked: false,
    },
    {
      title: 'Muesli',
      desc: 'Céréales',
      uri: 'https://www.notretemps.com/images/articles/cuisine/recettes/muesli-recette.jpeg',
      isLiked: false,
    },
    {
      title: 'Muesli',
      desc: 'Céréales',
      uri: 'https://www.notretemps.com/images/articles/cuisine/recettes/muesli-recette.jpeg',
      isLiked: false,
    },
    {
      title: 'Muesli',
      desc: 'Céréales',
      uri: 'https://www.notretemps.com/images/articles/cuisine/recettes/muesli-recette.jpeg',
      isLiked: false,
    },
    {
      title: 'Muesli',
      desc: 'Céréales',
      uri: 'https://www.notretemps.com/images/articles/cuisine/recettes/muesli-recette.jpeg',
      isLiked: false,
    },
    {
      title: 'Muesli',
      desc: 'Céréales',
      uri: 'https://www.notretemps.com/images/articles/cuisine/recettes/muesli-recette.jpeg',
      isLiked: false,
    },
    {
      title: 'Muesli',
      desc: 'Céréales',
      uri: 'https://www.notretemps.com/images/articles/cuisine/recettes/muesli-recette.jpeg',
      isLiked: false,
    },
    {
      title: 'Muesli',
      desc: 'Céréales',
      uri: 'https://www.notretemps.com/images/articles/cuisine/recettes/muesli-recette.jpeg',
      isLiked: false,
    },
    {
      title: 'Muesli',
      desc: 'Céréales',
      uri: 'https://www.notretemps.com/images/articles/cuisine/recettes/muesli-recette.jpeg',
      isLiked: false,
    },
    {
      title: 'Muesli',
      desc: 'Céréales',
      uri: 'https://www.notretemps.com/images/articles/cuisine/recettes/muesli-recette.jpeg',
      isLiked: false,
    },
  ],
  Midi: [
    {
      title: 'Tranches de steak à la roquette',
      desc: 'Viande',
      uri:
        'https://images.eatthismuch.com/site_media/img/45608_ldementhon_44c4211c-7457-4c40-b8da-28ec25b92b0d.jpg',
      isLiked: false,
    },
    {
      title: 'Tranches de steak à la roquette',
      desc: 'Viande',
      uri:
        'https://images.eatthismuch.com/site_media/img/45608_ldementhon_44c4211c-7457-4c40-b8da-28ec25b92b0d.jpg',
      isLiked: false,
    },
    {
      title: 'Tranches de steak à la roquette',
      desc: 'Viande',
      uri:
        'https://images.eatthismuch.com/site_media/img/45608_ldementhon_44c4211c-7457-4c40-b8da-28ec25b92b0d.jpg',
      isLiked: false,
    },
    {
      title: 'Tranches de steak à la roquette',
      desc: 'Viande',
      uri:
        'https://images.eatthismuch.com/site_media/img/45608_ldementhon_44c4211c-7457-4c40-b8da-28ec25b92b0d.jpg',
      isLiked: false,
    },
    {
      title: 'Tranches de steak à la roquette',
      desc: 'Viande',
      uri:
        'https://images.eatthismuch.com/site_media/img/45608_ldementhon_44c4211c-7457-4c40-b8da-28ec25b92b0d.jpg',
      isLiked: false,
    },
    {
      title: 'Tranches de steak à la roquette',
      desc: 'Viande',
      uri:
        'https://images.eatthismuch.com/site_media/img/45608_ldementhon_44c4211c-7457-4c40-b8da-28ec25b92b0d.jpg',
      isLiked: false,
    },
  ],
  Snack: [
    {
      title: 'Sablé au beurre',
      desc: 'Biscuit',
      uri:
        'https://www.bakedbyanintrovert.com/wp-content/uploads/2018/10/Basic-Butter-Cookies-Recipe-Image-735x735.jpg',
      isLiked: false,
    },
    {
      title: 'Sablé au beurre',
      desc: 'Biscuit',
      uri:
        'https://www.bakedbyanintrovert.com/wp-content/uploads/2018/10/Basic-Butter-Cookies-Recipe-Image-735x735.jpg',
      isLiked: false,
    },
    {
      title: 'Sablé au beurre',
      desc: 'Biscuit',
      uri:
        'https://www.bakedbyanintrovert.com/wp-content/uploads/2018/10/Basic-Butter-Cookies-Recipe-Image-735x735.jpg',
      isLiked: false,
    },
    {
      title: 'Sablé au beurre',
      desc: 'Biscuit',
      uri:
        'https://www.bakedbyanintrovert.com/wp-content/uploads/2018/10/Basic-Butter-Cookies-Recipe-Image-735x735.jpg',
      isLiked: false,
    },
    {
      title: 'Sablé au beurre',
      desc: 'Biscuit',
      uri:
        'https://www.bakedbyanintrovert.com/wp-content/uploads/2018/10/Basic-Butter-Cookies-Recipe-Image-735x735.jpg',
      isLiked: false,
    },
    {
      title: 'Sablé au beurre',
      desc: 'Biscuit',
      uri:
        'https://www.bakedbyanintrovert.com/wp-content/uploads/2018/10/Basic-Butter-Cookies-Recipe-Image-735x735.jpg',
      isLiked: false,
    },
  ],
  Soir: [
    {
      title: 'Cake au saumon fumé et citron',
      desc: 'Poisson',
      uri: 'https://kiwings-images-prod.s3-eu-west-1.amazonaws.com/recipes/521f11245c8ae.jpeg',
      isLiked: false,
    },
    {
      title: 'Cake au saumon fumé et citron',
      desc: 'Poisson',
      uri: 'https://kiwings-images-prod.s3-eu-west-1.amazonaws.com/recipes/521f11245c8ae.jpeg',
      isLiked: false,
    },
    {
      title: 'Cake au saumon fumé et citron',
      desc: 'Poisson',
      uri: 'https://kiwings-images-prod.s3-eu-west-1.amazonaws.com/recipes/521f11245c8ae.jpeg',
      isLiked: false,
    },
    {
      title: 'Cake au saumon fumé et citron',
      desc: 'Poisson',
      uri: 'https://kiwings-images-prod.s3-eu-west-1.amazonaws.com/recipes/521f11245c8ae.jpeg',
      isLiked: false,
    },
    {
      title: 'Cake au saumon fumé et citron',
      desc: 'Poisson',
      uri: 'https://kiwings-images-prod.s3-eu-west-1.amazonaws.com/recipes/521f11245c8ae.jpeg',
      isLiked: false,
    },
    {
      title: 'Cake au saumon fumé et citron',
      desc: 'Poisson',
      uri: 'https://kiwings-images-prod.s3-eu-west-1.amazonaws.com/recipes/521f11245c8ae.jpeg',
      isLiked: false,
    },
  ],
};

export const Context = createContext(dummy.matin);

const ListRecipeScreen: FunctionComponent<ListRecipeProps> = ({ navigation }) => {
  const [whoFocused, setWhoFocused] = useState(Titles.matin);
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
