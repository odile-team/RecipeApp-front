export type FormIndex = 'email' | 'password';
export type FormIndexOptional = 'username' | 'confirmPassword';
export type FormIndexPlaceholders = FormIndex | FormIndexOptional;

export type FormFieldsOptional = {
  [key in FormIndexOptional]?: string;
};

export type FormFields = FormFieldsOptional &
  {
    [key in FormIndex]: string;
  };

export type FormFieldsPlaceholders = {
  [key in FormIndexPlaceholders]: string;
};
