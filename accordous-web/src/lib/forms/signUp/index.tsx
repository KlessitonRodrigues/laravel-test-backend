import { useState } from 'react';
import { LuLock, LuMail } from 'react-icons/lu';

import { MainButton } from 'src/lib/styled/Buttons';
import { Column, Row } from 'src/lib/styled/Flex';
import { Form } from 'src/lib/styled/Forms';
import { Input, InputBox, Label } from 'src/lib/styled/Inputs';
import { DefaultTitle } from 'src/lib/styled/typography';
import { isValidPassword } from 'src/utils/forms';

const initialState: Forms.SignUp = {
  email: '',
  name: '',
  phone: '',
  cpf: '',
  password: '',
  confirmPassword: '',
};

export const SignUpForm = (props: Props.Form<Forms.SignUp>) => {
  const { onSubmit } = props;
  const [form, setForm] = useState(initialState);

  const handleSubmit = (ev: any) => {
    ev.preventDefault();
    if (!isValidPassword(form.password)) return;
    onSubmit && onSubmit(form);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <DefaultTitle size={10}>New Account</DefaultTitle>

      <Column gap={8}>
        <Label>
          <h6>Email</h6>
          <InputBox>
            <LuMail size={18} />
            <Input placeholder="Enter your email" />
          </InputBox>
        </Label>

        <Label>
          <h6>Password</h6>
          <InputBox>
            <LuLock size={18} />
            <Input placeholder="Enter your password" />
          </InputBox>
        </Label>

        <Label>
          <h6>Confirm Password</h6>
          <InputBox>
            <LuLock size={18} />
            <Input placeholder="Enter your password" />
          </InputBox>
        </Label>
      </Column>

      <MainButton>Create</MainButton>
    </Form>
  );
};
