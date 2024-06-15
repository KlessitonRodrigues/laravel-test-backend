import { useState } from 'react';
import { LuMail } from 'react-icons/lu';

import HiddenInput from 'src/lib/base/HiddenInput';
import { MainButton } from 'src/lib/base/StyledComponents/Buttons';
import { Column, Row } from 'src/lib/base/StyledComponents/Flex';
import { Form } from 'src/lib/base/StyledComponents/Forms';
import { Input, InputBox, Label } from 'src/lib/base/StyledComponents/Inputs';
import { DefaultTitle } from 'src/lib/base/StyledComponents/typography';
import { isValidPassword } from 'src/utils/forms';

const initialState: Forms.SignIn = {
  email: '',
  password: '',
  rememberMe: false,
};

export const SignInForm = (props: Props.Form<Forms.SignIn>) => {
  const { onSubmit } = props;
  const [form, setForm] = useState(initialState);

  const handleSubmit = (ev: any) => {
    ev.preventDefault();
    if (!isValidPassword(form.password)) return;
    onSubmit && onSubmit(form);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <DefaultTitle size={10}>Login</DefaultTitle>

      <Column gap={10}>
        <Label>
          <h6>Email</h6>
          <InputBox>
            <LuMail size={18} />
            <Input placeholder="Enter your email" required />
          </InputBox>
        </Label>

        <Column right>
          <Label>
            <h6>Password</h6>
            <HiddenInput value="" onChange={() => {}} placeholder="Enter your password" required />
          </Label>
          <Row right>
            <small>Forgot password?</small>
          </Row>
        </Column>
      </Column>

      <MainButton>Enter</MainButton>
    </Form>
  );
};
