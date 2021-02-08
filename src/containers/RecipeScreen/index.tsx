import React, { FunctionComponent } from 'react';

import ListRecipeScreen from './Screens/ListRecipe/ListRecipeScreen';

import { NavigatorProps } from './Screens/ListRecipe/types';

const RecipeScreenNavigation: FunctionComponent<NavigatorProps> = () => <ListRecipeScreen />;

export default RecipeScreenNavigation;
