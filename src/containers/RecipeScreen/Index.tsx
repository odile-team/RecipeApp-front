import React, { FunctionComponent } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import RecipeScreen from "./RecipeScreen";

import { RecipeProps } from "./types";
import { defaultNavigatorOptions } from "navigation/navigationOptions/mainNavigatorOptions";

const Stack = createStackNavigator();

const RecipeScreenNavigation: FunctionComponent<RecipeProps> = () => {
    return (
        <Stack.Navigator screenOptions={defaultNavigatorOptions}>
            <Stack.Screen name="RecipeScreen" component={RecipeScreen} />
        </Stack.Navigator>
    );
};

export default RecipeScreenNavigation;
