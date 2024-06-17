import { useState } from 'react';
import { LuMail } from 'react-icons/lu';

import HiddenInput from 'src/lib/base/HiddenInput';
import InputField from 'src/lib/base/InputField';
import { MainButton } from 'src/lib/base/StyledComponents/Buttons';
import { Column, Row } from 'src/lib/base/StyledComponents/Flex';
import { Form } from 'src/lib/base/StyledComponents/Forms';
import { DefaultTitle } from 'src/lib/base/StyledComponents/typography';
import { isValidEmail, isValidPassword } from 'src/utils/forms';

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
    if (!isValidEmail(form.email)) return;
    if (!isValidPassword(form.password)) return;
    onSubmit && onSubmit(form);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <DefaultTitle size={10}>Login</DefaultTitle>

      <Column gap={10}>
        <InputField
          required
          label="Email"
          placeholder="Enter your email"
          iconLeft={<LuMail size={18} />}
          value={form.email}
          onChange={email => setForm({ ...form, email })}
          large
        />

        <Column right>
          <HiddenInput
            required
            label="Password"
            placeholder="Enter your password"
            value={form.password}
            onChange={password => setForm({ ...form, password })}
            large
          />
          <Row right>
            <small>Forgot password?</small>
          </Row>
        </Column>
      </Column>

      <MainButton w="10rem">Enter</MainButton>
    </Form>
  );
};
