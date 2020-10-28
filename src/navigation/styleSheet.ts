import {  StyleSheet } from "react-native";

import {percentOf} from 'utils/percentOf';

export const styles = (height: number) => StyleSheet.create({
    navigator: {
        elevation: 0,
        shadowOpacity: 0,
        borderRadius: 13,
        height: (percentOf(height, 8) + 30),
        backgroundColor: 'red'
    }
})