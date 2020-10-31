import React from 'react';

import FormContainer from 'components/FormContainer/FormContainer';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';
import ButtonText from 'components/ButtonText/ButtonText';
import Loader from 'components/Loader/Loader';
import FullScreenLayer from 'components/FullScreenLayer/FullScreenLayer';

import { LoginContainer, Title, BottomText } from './style';
import { LoginText, SignUpText } from './config';
import { FormFields, FormFieldsPlaceholders, FormIndexPlaceholders } from './types';

const LoginRequest = async (formFields: FormFields): Promise<boolean> => {
  const res: boolean = await new Promise((resolve, _reject) => {
    setTimeout(() => {
      resolve(true);
    }, 3000);
  });
  return res;
};

const LoginScreen = (): JSX.Element => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [signUp, setSignUp] = React.useState(false);
  const [formFields, setFormFields] = React.useState<FormFields>({
    email: '',
    password: '',
  });
  const [text, setText] = React.useState(LoginText);

  const formFieldsPlaceholders: FormFieldsPlaceholders = {
    username: 'Username',
    email: 'Mail',
    password: 'Password',
    confirmPassword: 'Confirm Password',
  };

  React.useEffect(() => {
    if (signUp) {
      setFormFields((prev) => ({ username: '', ...prev, confirmPassword: '' }));
      setText(SignUpText);
    }
    if (!signUp) {
      setFormFields(({ password, email }) => ({ email, password }));
      setText(LoginText);
    }
  }, [signUp]);

  const onChangeFormFields = (key: string, value: string): void =>
    setFormFields((prev) => ({ ...prev, [key]: value }));
  const onPressIcon = (): void => setShowPassword(!showPassword);

  return (
    <LoginContainer>
      {isLoading && (
        <FullScreenLayer>
          <Loader />
        </FullScreenLayer>
      )}
      <FormContainer signUp={signUp}>
        <>
          <Title>{text.title}</Title>
          {Object.keys(formFields).map((key: string) => {
            const props =
              ((key === 'password' || key === 'confirmPassword') && {
                iconValue: showPassword ? 'eye-outline' : 'eye-off-outline',
                onPressIcon,
                showPassword: !showPassword,
              }) ||
              {};
            return (
              <Input
                key={`${key}-input-field`}
                placeholderValue={formFieldsPlaceholders[key as FormIndexPlaceholders]}
                value={formFields[key as FormIndexPlaceholders] || ''}
                onChange={(value: string) => onChangeFormFields(key, value)}
                {...props}
              />
            );
          })}
          <Button
            text={text.title}
            onPress={async () => {
              setIsLoading(true);
              await LoginRequest(formFields);
              setIsLoading(false);
            }}
          />
          <BottomText>
            <ButtonText text={text.ChangeButton} onPress={() => setSignUp(!signUp)} />
          </BottomText>
        </>
      </FormContainer>
    </LoginContainer>
  );
};

export default LoginScreen;
