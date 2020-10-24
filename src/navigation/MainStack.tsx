import React from "react";
import "react-native-gesture-handler";
// @ts-ignore
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Index from "index";

const screenOptions: object = { headerShown: false };

const Stack = createStackNavigator();

const MainStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={screenOptions}>
                <Stack.Screen name="Welcome" component={Index} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MainStack;
