import React from "react";
import { FunctionComponent } from "react";
import { Text, View } from "react-native";

import { IndexProps } from "types/index";
import { IndexContainer } from "styles/index";

const Index: FunctionComponent<IndexProps> = () => {
    return (
        <IndexContainer>
            <Text>Welcome</Text>
        </IndexContainer>
    );
};

export default Index;
