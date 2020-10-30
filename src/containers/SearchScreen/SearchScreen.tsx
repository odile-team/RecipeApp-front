import React, { FunctionComponent } from "react";
import { Text } from "react-native";
import { CenteredContainer } from "globalStyles/index";
import { SearchProps } from "./types";

const SearchScreen: FunctionComponent<SearchProps> = () => {
    return (
        <CenteredContainer>
            <Text>Search Screen</Text>
        </CenteredContainer>
    );
};

export default SearchScreen;
