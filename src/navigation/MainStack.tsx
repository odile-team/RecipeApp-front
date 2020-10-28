import React from "react";
import { Dimensions } from 'react-native';
// @ts-ignore
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { mainNavigatorOptions } from "./navigationOptions/mainNavigatorOptions";

import TabComponent from "components/TabNavigation/Tab";

import SearchScreen from "containers/SearchScreen/Index";
import GroceryScreen from "containers/GroceryScreen/Index";
import ProfileScreen from "containers/ProfileScreen/Index";
import RecipeScreen from "containers/RecipeScreen/Index";

import { percentOf } from 'utils/percentOf'

import {styles} from './styleSheet'

const Tab = createBottomTabNavigator();

const MainStack = () => {
    const windowHeight = Dimensions.get('window').height;

    return (
        <NavigationContainer>
            {/* TODO: Faire fonctionner le style */}
            {/* TODO: Enlever l'ombre ou la border  */}
            <Tab.Navigator screenOptions={mainNavigatorOptions} tabBarOptions={{ style: styles(windowHeight),
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
