// @ts-ignore
import styled from "@emotion/native";
import {  Transitioning } from "react-native-reanimated";

import {colors} from "styles/color"

export const Container = styled.TouchableWithoutFeedback``;

export const Background = styled(Transitioning.View)`
    flex: auto;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background: ${colors.lightgrey};
    border-radius: 100px;
    margin: 6px;
`;
export const Icon = styled.Image`
    height: 24px;
    width: 24px;
`;

export const Label = styled.Text`
    color: ${colors.mainBlue};
    font-weight: 600;
    margin-left: 8px;
`;