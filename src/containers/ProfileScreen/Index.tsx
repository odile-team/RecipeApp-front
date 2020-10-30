import React, { FunctionComponent } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ProfileScreen from "./ProfileScreen";

import { NavigatorProps } from "./types";
import { defaultNavigatorOptions } from "navigation/navigationOptions/mainNavigatorOptions";

const Stack = createStackNavigator();

const ProfileScreenNavigation: FunctionComponent<NavigatorProps> = () => {
    return (
        <Stack.Navigator screenOptions={defaultNavigatorOptions}>
            <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        </Stack.Navigator>
    );
};

export default ProfileScreenNavigation;
