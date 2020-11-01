import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { InputContainer, Placeholder, ValueContainer, ValueField, IconContainer } from './style';
import { colors } from 'globalStyles/color';

import { passwordIcons } from './IconsName';

const Input = ({
  placeholderValue,
  value,
  onChange,
  passwordMode,
}: {
  placeholderValue?: string;
  value: string | number;
  onChange: Function;
  passwordMode?: boolean;
}): JSX.Element => {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <InputContainer>
      <Placeholder>{placeholderValue}</Placeholder>
      <ValueContainer>
        <ValueField onChangeText={onChange} secureTextEntry={!showPassword}>
          {value}
        </ValueField>
        {passwordMode && (
          <IconContainer onPress={() => setShowPassword(!showPassword)}>
            <MaterialCommunityIcons
              name={showPassword ? passwordIcons.show : passwordIcons.hide}
              size={24}
              color={colors.grey}
            />
          </IconContainer>
        )}
      </ValueContainer>
    </InputContainer>
  );
};

export default Input;
