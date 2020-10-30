import React, { FunctionComponent } from "react";
import { Text } from "react-native";
import { CenteredContainer } from "globalStyles/index";
import { ProfileProps } from "./types";
const ProfileScreen: FunctionComponent<ProfileProps> = () => {
    return (
        <CenteredContainer>
            <Text>Profile Screen</Text>
        </CenteredContainer>
    );
};

export default ProfileScreen;
