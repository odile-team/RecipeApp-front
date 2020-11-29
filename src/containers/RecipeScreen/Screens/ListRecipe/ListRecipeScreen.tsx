import React, { FunctionComponent, useState, createContext, useEffect } from 'react';
import { Dimensions, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  useDerivedValue,
  withSpring,
} from 'react-native-reanimated';
import { mix } from 'react-native-redash';

import CategoriesTitle from './components/CategoriesTitle/CategoriesTitle';

import { SafeAreaView } from 'globalStyles/index';
import { getStyles } from './style';

import { ListRecipeProps } from './types';
import { Titles } from './config';
import RecipeList from 'components/RecipeList';
import { percentOf } from 'utils/percentOf';

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

export const Context = createContext(dummy.Matin);

const ListRecipeScreen: FunctionComponent<ListRecipeProps> = () => {
  const [whoFocused, setWhoFocused] = useState(Titles.matin);
  const [data, setData] = useState(dummy[whoFocused]);
  const [isOnList, setIsOnList] = useState(true);
  const isHeaderHided: Animated.SharedValue<number> = useSharedValue(isOnList ? 0 : 1);
  const transitionHeader: Animated.SharedValue<number> = useDerivedValue(() =>
    withSpring(isHeaderHided.value)
  );

  const height = Dimensions.get('window').height;
  const styles = getStyles(height);

  const topHideValue = -percentOf(height, 10) - 30;

  const titleAnimatedStyle = useAnimatedStyle(() => {
    const top = mix(transitionHeader.value, 0, topHideValue);
    return { top, height: height - topHideValue };
  });

  const getRoute = (routeName: string) => {
    setIsOnList(routeName === 'RecipeList');
  };

  useEffect(() => {
    setData(dummy[whoFocused]);
  }, [whoFocused, dummy]);

  return (
    <Animated.View style={titleAnimatedStyle}>
      <SafeAreaView>
        <View style={styles.titleContainer}>
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
        </View>
        <View style={styles.recipeListContainer}>
          <RecipeList data={data} getRoute={getRoute} />
        </View>
      </SafeAreaView>
    </Animated.View>
  );
};

export default ListRecipeScreen;
