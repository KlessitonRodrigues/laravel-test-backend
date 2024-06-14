import { useState } from 'react';
import { LuMail } from 'react-icons/lu';

import { MainButton } from 'src/lib/styled/Buttons';
import { Column } from 'src/lib/styled/Flex';
import { Form } from 'src/lib/styled/Forms';
import { Input, InputBox, Label } from 'src/lib/styled/Inputs';
import { DefaultTitle } from 'src/lib/styled/typography';

const initialState: Forms.VerifyCode = {
  email: '',
  code: '',
};

export const VerifyCodeForm = (props: Props.Form<Forms.VerifyCode>) => {
  const { onSubmit } = props;
  const [form, setForm] = useState(initialState);

  const handleSubmit = (ev: any) => {
    ev.preventDefault();
    onSubmit && onSubmit(form);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <DefaultTitle size={10}>Verification Code</DefaultTitle>

      <Column gap={10}>
        <Label>
          <h6>Verification Code</h6>
          <InputBox>
            <LuMail size={18} />
            <Input placeholder="Enter your email" />
          </InputBox>
        </Label>
      </Column>

      <MainButton>Create</MainButton>
    </Form>
  );
};
