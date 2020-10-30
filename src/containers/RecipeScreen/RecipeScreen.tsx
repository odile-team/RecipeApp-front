import React, { FunctionComponent } from "react";
import { Text } from "react-native";
import { CenteredContainer } from "globalStyles/index";
import { RecipeProps } from "./types";

const RecipeScreen: FunctionComponent<RecipeProps> = () => {
    return (
        <CenteredContainer>
            <Text>Recipe Screen</Text>
        </CenteredContainer>
    );
};

export default RecipeScreen;
