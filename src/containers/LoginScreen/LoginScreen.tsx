import React from 'react';

import FormContainer from 'components/FormContainer/FormContainer';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';
import ButtonText from 'components/ButtonText/ButtonText';
import Loader from 'components/Loader/Loader';
import FullScreenLayer from 'components/FullScreenLayer/FullScreenLayer';

import { LoginContainer, Title, BottomText } from './style';
import { LoginText, SignUpText, Fields } from './config';
import { FormFields, FormIndexPlaceholders } from './types';

const LoginRequest = async (formFields: FormFields): Promise<boolean> => {
  const res: boolean = await new Promise((resolve, _reject) => {
    setTimeout(() => {
      resolve(true);
    }, 3000);
  });
  return res;
};

const assignProps = (key: string): object | undefined => {
  if (
    Fields[key as FormIndexPlaceholders] === Fields.password ||
    Fields[key as FormIndexPlaceholders] === Fields.confirmPassword
  ) {
    return {
      passwordMode: true,
    };
  }
};

const LoginScreen = (): JSX.Element => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [signUp, setSignUp] = React.useState(false);
  const [formFields, setFormFields] = React.useState<FormFields>({
    email: '',
    password: '',
  });
  const [text, setText] = React.useState(LoginText);

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

  return (
    <LoginContainer testID="LoginTestId">
      {isLoading && (
        <FullScreenLayer>
          <Loader />
        </FullScreenLayer>
      )}
      <FormContainer signUp={signUp}>
        <>
          <Title testID="LoginTitle">{text.title}</Title>
          {Object.keys(formFields).map((key: string) => {
            const props = assignProps(key);
            return (
              <Input
                key={`${key}-input-field`}
                placeholderValue={Fields[key as FormIndexPlaceholders]}
                value={formFields[key as FormIndexPlaceholders] || ''}
                onChange={(value: string) => onChangeFormFields(key, value)}
                {...props}
              />
            );
          })}
          <Button
            testID="validateButton"
            text={text.title}
            onPress={async () => {
              setIsLoading(true);
              await LoginRequest(formFields);
              setIsLoading(false);
            }}
          />
          <BottomText>
            <ButtonText
              testID="switchLoginScreen"
              text={text.ChangeButton}
              onPress={() => setSignUp(!signUp)}
            />
          </BottomText>
        </>
      </FormContainer>
    </LoginContainer>
  );
};

export default LoginScreen;
