import React, { FunctionComponent } from 'react';
import { SafeAreaView } from 'globalStyles/index';

import {
  DescriptionContainer,
  PictureContainer,
  HeadContainer,
  MainHeadPart,
  Title,
  CategoriesContainer,
  LikeContainer,
  InfoContainer,
  StepsContainer,
  PartStepsContainer,
  OtherInfosContainer,
  IngredientsContainer,
  DescTitle,
  IngredientsTitle,
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

interface RecipeProps {
  route: any;
}

const ingredients = ['Ingredient 1', 'Ingredient 2', 'Ingredient 3'];

const steps = ['Step 1', 'Step 2', 'Step 3'];

const categories = ['BreakFast', 'Cereals'];

const RecipeScreen: FunctionComponent<RecipeProps> = ({ route }) => {
  const { title, uri, isLiked } = route.params;

  return (
    <SafeAreaView>
      <PictureContainer
        source={{
          uri: uri,
        }}
      />
      <ScrollView>
        <DescriptionContainer>
          <HeadContainer>
            <MainHeadPart>
              <Title>{title}</Title>
              <CategoriesContainer>
                {categories.map((category) => {
                  <Categorie category={category} />;
                })}
              </CategoriesContainer>
            </MainHeadPart>
            <LikeContainer>
              <LikeButton onPress={() => {}} isLiked={isLiked} />
            </LikeContainer>
          </HeadContainer>
          <InfoContainer>
            <Stars />
            <LikeNumber />
          </InfoContainer>
          <BreakLine />
          <PartStepsContainer>
            <DescTitle>STEPS</DescTitle>
            <StepsContainer>
              {steps.map((step, index) => {
                <Steps step={step} index={index} />;
              })}
            </StepsContainer>
            <OtherInfosContainer>
              <Time time={25} />
              <NumberOfPart parts={2} />
            </OtherInfosContainer>
            <IngredientsContainer>
              <IngredientsTitle>INGREDIENTS</IngredientsTitle>
              {ingredients.map((ingredient) => {
                <Ingredient ingredient={ingredient} />;
              })}
            </IngredientsContainer>
          </PartStepsContainer>
        </DescriptionContainer>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RecipeScreen;
