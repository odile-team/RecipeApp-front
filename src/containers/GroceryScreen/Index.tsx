import React, { FunctionComponent } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import GroceryScreen from "./GroceryScreen";

import { GroceryProps } from "./types";
import { defaultNavigatorOptions } from "navigation/navigationOptions/mainNavigatorOptions";

const Stack = createStackNavigator();

const GroceryScreenNavigation: FunctionComponent<GroceryProps> = () => {
    return (
        <Stack.Navigator screenOptions={defaultNavigatorOptions}>
            <Stack.Screen name="GroceryScreen" component={GroceryScreen} />
        </Stack.Navigator>
    );
};

export default GroceryScreenNavigation;