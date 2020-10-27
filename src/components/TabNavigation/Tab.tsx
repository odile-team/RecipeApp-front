import React, { useRef } from "react";
// @ts-ignore
import { Transition } from "react-native-reanimated";

import { Container, Background, Label } from './style'

// interface accessibilityStateValue {
//     selected: boolean;
// }
// TODO: comprendre les typing de accessibilityState et onPress
const Tab = ({
    label,
    accessibilityState,
    onPress, }: any
    // }: {
    //     label: string;
    //     accessibilityState: any;
    //     onPress: any;
) => {
    const focused = accessibilityState.selected;
    const icon = !focused ? label.charAt(0).toUpperCase() : label;

    // TODO: Refaire les animation clean en lisant reanimated
    const transition = (
        <Transition.Sequence>
            <Transition.Out type="fade" durationMs={10} />
            <Transition.Change interpolation="easeInOut" durationMs={100} />
            <Transition.In type="fade" durationMs={10} />
        </Transition.Sequence>
    );

    // TODO: comprendre les types de useRef
    const ref: any = useRef();

    return (
        <Container
            onPress={() => {
                ref.current.animateNextTransition();
                onPress();
            }}
        >
            <Background
                focused={focused}
                label={label}
                ref={ref}
                transition={transition}
            >
                {/* TODO: Mettre de belles icones */}
                <Label label={label}>
                    {focused ? label.charAt(0).toUpperCase() + label.slice(1) : icon}
                </Label>
            </Background>
        </Container>
    );
};

export default Tab;
