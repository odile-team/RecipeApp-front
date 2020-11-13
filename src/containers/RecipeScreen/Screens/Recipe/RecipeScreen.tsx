import React, { FunctionComponent } from 'react';

import {
  DescriptionContainer,
  PictureContainer,
  HeadContainer,
  MainHeadPart,
  Title,
  CategoriesContainer,
  LikeContainer,
  InfoContainer,
  PartStepsContainer,
  OtherInfosContainer,
  SubTitle,
  SubContainer,
  ScrollContainer,
} from './styles';

import Categorie from './Components/Categorie/Categorie';
import Stars from './Components/Stars/Stars';
import LikeNumber from './Components/LikeNumber/LikeNumber';
import Steps from './Components/Steps/Steps';
import Time from './Components/Time/Time';
import NumberOfPart from './Components/NumberOfPart/NumberOfPart';
import Ingredient from './Components/Ingredient/Ingredient';

import LikeButton from 'components/LikeButton/LikeButton';
import BreakLine from 'components/BreakLine/BreakLine';
import { ScrollView } from 'react-native-gesture-handler';
import { View } from 'react-native';

interface RecipeProps {
  route: any;
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

const categories = ['BreakFast', 'Cereals'];

const RecipeScreen: FunctionComponent<RecipeProps> = ({ route }) => {
  const { title, uri, isLiked } = route.params;

  return (
    <View>
      <PictureContainer
        source={{
          uri: uri,
        }}
      />
      <ScrollContainer>
        <ScrollView>
          <DescriptionContainer>
            {/* cut HeadContainer */}
            <HeadContainer>
              {/* cut MainHeadPart */}
              <MainHeadPart>
                <Title>{title}</Title>
                <CategoriesContainer>
                  {categories.map((category) => (
                    <Categorie category={category} />
                  ))}
                </CategoriesContainer>
              </MainHeadPart>
              <LikeContainer>
                <LikeButton onPress={() => {}} isLiked={isLiked} />
              </LikeContainer>
            </HeadContainer>
            {/* cut infoContainer */}
            <InfoContainer>
              <Stars stars={4} />
              <LikeNumber like={234} />
            </InfoContainer>
            <BreakLine />
            {/* cut PartStepsContainer */}
            <PartStepsContainer>
              {/* Cut OtherInfosContainer */}
              <OtherInfosContainer>
                <Time time={25} />
                <NumberOfPart parts={2} />
              </OtherInfosContainer>
              {/* ?? cut Ingredients */}
              <SubContainer>
                <SubTitle>INGREDIENTS</SubTitle>
                {ingredients.map((ingredient) => (
                  <Ingredient
                    quantity={ingredient.quantity}
                    unit={ingredient.unit}
                    name={ingredient.name}
                  />
                ))}
              </SubContainer>
              {/* ?? cut Steps */}
              <SubContainer>
                <SubTitle>STEPS</SubTitle>
                {steps.map((step) => (
                  <Steps step={step.step} order={step.order} />
                ))}
              </SubContainer>
            </PartStepsContainer>
          </DescriptionContainer>
        </ScrollView>
      </ScrollContainer>
    </View>
  );
};

export default RecipeScreen;
