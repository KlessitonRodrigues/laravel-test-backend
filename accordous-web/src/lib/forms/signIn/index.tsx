import { useState } from 'react';
import { LuLock, LuMail } from 'react-icons/lu';

import { MainButton } from 'src/lib/styled/Buttons';
import { Column, Row } from 'src/lib/styled/Flex';
import { Form } from 'src/lib/styled/Forms';
import { Input, InputBox, Label } from 'src/lib/styled/Inputs';
import { DefaultTitle } from 'src/lib/styled/typography';
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
            <Input placeholder="Enter your email" />
          </InputBox>
        </Label>

        <Column right>
          <Label>
            <h6>Password</h6>
            <InputBox>
              <LuLock size={18} />
              <Input placeholder="Enter your password" />
            </InputBox>
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
