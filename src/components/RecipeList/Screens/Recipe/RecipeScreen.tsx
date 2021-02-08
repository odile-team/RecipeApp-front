import React, { FunctionComponent, useState, useEffect } from 'react';
import { SharedElement } from 'react-navigation-shared-element';
import { ScrollView } from 'react-native-gesture-handler';
import { Dimensions } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  useDerivedValue,
  withSpring,
} from 'react-native-reanimated';
import { mix } from 'react-native-redash';

import { DescriptionContainer, PictureContainer, ScrollContainer, styles } from './styles';

import { colors } from 'globalStyles/color';

import BreakLine from 'components/BreakLine/BreakLine';
import BackView from 'components/BackView/BackView';
import Head from './Components/Head/Head';
import CommunityInfo from './Components/CommunityInfo/CommunityInfo';
import RecipeInfo from './Components/RecipeInfo/RecipeInfo';
import Ingredients from './Components/Ingredients/Ingredients';
import RecipeSteps from './Components/RecipeSteps/RecipeSteps';

interface RecipeProps {
  route: any;
  navigation: any;
  sendRoute?: Function;
}

const ingredients = [
  {
    quantity: 4,
    unit: 'tranche',
    name: 'Saumon fumé',
  },
  {
    quantity: 10,
    unit: 'centilitre',
    name: 'Huile dolive vierge',
  },
  {
    quantity: 3,
    unit: 'sans unité',
    name: 'Oeuf',
  },
];

const steps = [
  {
    order: 1,
    step: 'Préchauffez le four à 190°C.',
  },
  {
    order: 2,
    step:
      'Dans un saladier, mélangez les œufs, la farine, la levure, lhuile dolive et la crème fraîche jusquà lobtention dun mélange crémeux.',
  },
  {
    order: 3,
    step: 'Ajoutez le jus de citron puis fouettez le mélange.',
  },
  {
    order: 4,
    step:
      'Incorporez le gruyère, le saumon fumé coupé en morceaux et la ciboulette ciselée. Salez et poivrez au moulin.',
  },
  {
    order: 5,
    step:
      'Versez la préparation dans un moule à cake préalablement beurré et enfournez pour 45 minutes.',
  },
];

const categories = ['Entrée', 'Poisson'];

const RecipeScreen: FunctionComponent<RecipeProps> = ({ navigation, route, sendRoute }) => {
  const { title, uri, isLiked, index } = route.params;
  const windowHeight: number = Dimensions.get('window').height;

  const [loading, setLoading] = React.useState(true);
  const [loadAnimation, setLoadAnimation] = React.useState(true);
  const [yPosition, setYPosition] = useState(0);
  const isScroll: Animated.SharedValue<number> = useSharedValue(yPosition > 50 ? 1 : 0);
  const isLoad: Animated.SharedValue<number> = useSharedValue(loadAnimation ? 1 : 0);
  const transition: Animated.SharedValue<number> = useDerivedValue(() =>
    withSpring(isScroll.value)
  );
  const load: Animated.SharedValue<number> = useDerivedValue(() => withSpring(isLoad.value));

  useEffect(() => {
    setTimeout(() => setLoadAnimation(false), 500);
    setTimeout(() => setLoading(false), 1700);
  }, []);

  const goBack = () => {
    sendRoute('RecipeList');
    navigation.goBack();
  };

  const animatedStyle = useAnimatedStyle(() => {
    const top = mix(
      loading ? load.value : transition.value,
      (windowHeight * 35) / 100,
      loading ? (windowHeight * 100) / 100 : (windowHeight * 15) / 100
    );
    return { top };
  });

  return (
    <BackView onPress={goBack} color={colors.black}>
      <SharedElement id={`image_${index}`} style={{ width: '100%', height: '100%' }}>
        <PictureContainer
          source={{
            uri,
          }}
        />
      </SharedElement>
      <Animated.View style={[styles.AnimatedContainer, animatedStyle]}>
        <ScrollContainer>
          <ScrollView
            scrollEventThrottle={200}
            onScroll={(e) => {
              setYPosition(e.nativeEvent.contentOffset.y);
            }}
          >
            <DescriptionContainer>
              <Head
                title={title}
                categories={categories}
                isLiked={isLiked}
                onLike={() => {
                  console.log('like');
                }}
              />
              <CommunityInfo stars={4.2} like={234} position={2} />
              <BreakLine />
              <>
                <RecipeInfo time={25} parts={2} position={3} />
                <Ingredients ingredients={ingredients} position={4} />
                <RecipeSteps steps={steps} position={5} />
              </>
            </DescriptionContainer>
          </ScrollView>
        </ScrollContainer>
      </Animated.View>
    </BackView>
  );
};

RecipeScreen.sharedElements = (route: any) => [
  { id: `image_${route.params.index}`, animation: 'move', resize: 'auto', align: 'auto' },
];

export default RecipeScreen;
