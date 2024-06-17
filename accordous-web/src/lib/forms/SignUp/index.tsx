import { useState } from 'react';
import { LuMail } from 'react-icons/lu';

import HiddenInput from 'src/lib/base/HiddenInput';
import InputField from 'src/lib/base/InputField';
import { MainButton } from 'src/lib/base/StyledComponents/Buttons';
import { Column } from 'src/lib/base/StyledComponents/Flex';
import { Form } from 'src/lib/base/StyledComponents/Forms';
import { DefaultTitle } from 'src/lib/base/StyledComponents/typography';
import { isValidPassword } from 'src/utils/forms';

const initialState: Forms.SignUp = {
  email: '',
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
        <InputField
          label="Email"
          placeholder="Enter your email"
          value={form.email}
          onChange={email => setForm({ ...form, email })}
          iconLeft={<LuMail size={18} />}
          large
        />
        <HiddenInput
          label="Password"
          placeholder="Enter your password"
          value={form.password}
          onChange={password => setForm({ ...form, password })}
          iconLeft={<LuMail size={18} />}
          large
        />
        <HiddenInput
          label="Confirm Password"
          placeholder="Enter your password again"
          value={form.confirmPassword}
          onChange={confirmPassword => setForm({ ...form, confirmPassword })}
          iconLeft={<LuMail size={18} />}
          large
        />
      </Column>
      <MainButton w="10rem">Create</MainButton>
    </Form>
  );
};
