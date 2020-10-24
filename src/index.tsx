import React from "react";
import { FunctionComponent } from "react";
import { Text } from "react-native";

import { IndexProps } from "types/index";
import { MainCenteredContainer } from "styles/index";

const Index: FunctionComponent<IndexProps> = () => {
    return (
        <MainCenteredContainer>
            <Text>Welcome</Text>
        </MainCenteredContainer>
    );
};

export default Index;
