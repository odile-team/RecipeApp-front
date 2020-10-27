import React from "react";
// @ts-ignore
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { mainNavigatorOptions } from "./navigationOptions/mainNavigatorOptions";

import TabComponent from "components/TabNavigation/Tab";

import SearchScreen from "containers/SearchScreen/Index";
import GroceryScreen from "containers/GroceryScreen/Index";
import ProfileScreen from "containers/ProfileScreen/Index";
import RecipeScreen from "containers/RecipeScreen/Index";

const Tab = createBottomTabNavigator();

const MainStack = () => {
    return (
        <NavigationContainer>
            {/* TODO: Terminer le style et le déplacer dans un autre fichier */}
            {/* TODO: Enlever l'ombre ou la border  */}
            <Tab.Navigator screenOptions={mainNavigatorOptions}     tabBarOptions={{ style: {
                elevation: 0,   // for Android
                shadowOpacity: 0, // for iOS,
                backgroundColor: 'red',
                borderRadius: 13,
                height:"8%",
            },
    }}>
                <Tab.Screen
                    name="Recipe screen"
                    component={RecipeScreen}
                    options={{
                        tabBarButton: (props) => (
                            <TabComponent
                                label="Recipe"
                                {...props}
                            />
                        ),
                    }}
                />
                <Tab.Screen name="Search screen" component={SearchScreen}
                    options={{
                        tabBarButton: (props) => (
                            <TabComponent
                                label="Search"
                                {...props}
                            />
                        ),
                    }} />
                <Tab.Screen name="Grocery screen" component={GroceryScreen}
                    options={{
                        tabBarButton: (props) => (
                            <TabComponent
                                label="Grocery"
                                {...props}
                            />
                        ),
                    }} />
                <Tab.Screen name="Profile screen" component={ProfileScreen}
                    options={{
                        tabBarButton: (props) => (
                            <TabComponent
                                label="Profile"
                                {...props}
                            />
                        ),
                    }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default MainStack;
