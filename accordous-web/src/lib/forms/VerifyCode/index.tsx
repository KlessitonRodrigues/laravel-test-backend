import { useState } from 'react';
import { LuMail } from 'react-icons/lu';

import { MainButton } from 'src/lib/base/StyledComponents/Buttons';
import { Column } from 'src/lib/base/StyledComponents/Flex';
import { Form } from 'src/lib/base/StyledComponents/Forms';
import { Input, InputBox, Label } from 'src/lib/base/StyledComponents/Inputs';
import { DefaultTitle } from 'src/lib/base/StyledComponents/typography';

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
