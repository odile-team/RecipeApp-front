import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { InputContainer, Placeholder, ValueContainer, ValueField, IconContainer } from './style';
import { colors } from 'globalStyles/color';

const Input = ({
  placeholderValue,
  value,
  iconValue,
  onChange,
  onPressIcon,
  showPassword,
}: {
  placeholderValue?: string;
  value: string | number;
  iconValue?: string;
  onChange: Function;
  onPressIcon?: Function;
  showPassword?: boolean;
}): JSX.Element => {
  return (
    <InputContainer>
      <Placeholder>{placeholderValue}</Placeholder>
      <ValueContainer>
        <ValueField onChangeText={onChange} secureTextEntry={!!showPassword}>
          {value}
        </ValueField>
        {iconValue && (
          <IconContainer onPress={onPressIcon}>
            <MaterialCommunityIcons name={iconValue} size={24} color={colors.grey} />
          </IconContainer>
        )}
      </ValueContainer>
    </InputContainer>
  );
};

export default Input;
