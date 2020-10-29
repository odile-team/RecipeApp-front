import React from "react";
import { Dimensions } from "react-native";
// @ts-ignore
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { mainNavigatorOptions } from "./navigationOptions/mainNavigatorOptions";

import TabComponent from "components/TabNavigation/Tab";

import SearchScreen from "containers/SearchScreen/Index";
import GroceryScreen from "containers/GroceryScreen/Index";
import ProfileScreen from "containers/ProfileScreen/Index";
import RecipeScreen from "containers/RecipeScreen/Index";

import { styles } from "./styleSheet";

const Tab = createBottomTabNavigator();

const MainStack = () => {
    const windowHeight = Dimensions.get("window").height;
    const style = styles(windowHeight);

    return (
        <NavigationContainer>
            {/* TODO: types de TabComponent */}
            <Tab.Navigator
                screenOptions={mainNavigatorOptions}
                tabBarOptions={{ style: style.navigator }}
            >
                <Tab.Screen
                    name="Recipe screen"
                    component={RecipeScreen}
                    options={{
                        tabBarButton: ({ accessibilityState, onPress }) => (
                            <TabComponent
                                label="Recipe"
                                accessibilityState={accessibilityState}
                                onPress={onPress}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Search screen"
                    component={SearchScreen}
                    options={{
                        tabBarButton: (props) => (
                            <TabComponent label="Search" {...props} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Grocery screen"
                    component={GroceryScreen}
                    options={{
                        tabBarButton: (props) => (
                            <TabComponent label="Grocery" {...props} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Profile screen"
                    component={ProfileScreen}
                    options={{
                        tabBarButton: (props) => (
                            <TabComponent label="Profile" {...props} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default MainStack;
