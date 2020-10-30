import React, { FunctionComponent } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SearchScreen from "./SearchScreen";

import { NavigatorProps } from "./types";
import { defaultNavigatorOptions } from "navigation/navigationOptions/mainNavigatorOptions";

const Stack = createStackNavigator();

const SearchScreenNavigation: FunctionComponent<NavigatorProps> = () => {
    return (
        <Stack.Navigator screenOptions={defaultNavigatorOptions}>
            <Stack.Screen name="searchScreen" component={SearchScreen} />
        </Stack.Navigator>
    );
};

export default SearchScreenNavigation;
