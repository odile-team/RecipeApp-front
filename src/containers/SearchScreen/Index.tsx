import React, { FunctionComponent } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SearchScreen from "./SearchScreen";

import { SearchProps } from "./types";
import { defaultNavigatorOptions } from "navigation/navigationOptions/mainNavigatorOptions";

const Stack = createStackNavigator();

const SearchScreenNavigation: FunctionComponent<SearchProps> = () => {
    return (
        <Stack.Navigator screenOptions={defaultNavigatorOptions}>
            <Stack.Screen name="searchScreen" component={SearchScreen} />
        </Stack.Navigator>
    );
};

export default SearchScreenNavigation;
