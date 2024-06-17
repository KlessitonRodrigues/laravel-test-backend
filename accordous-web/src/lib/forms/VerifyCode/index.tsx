import { useState } from 'react';
import { LuLock } from 'react-icons/lu';

import InputField from 'src/lib/base/InputField';
import { MainButton } from 'src/lib/base/StyledComponents/Buttons';
import { Column } from 'src/lib/base/StyledComponents/Flex';
import { Form } from 'src/lib/base/StyledComponents/Forms';
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
        <InputField
          label="Verification Code"
          placeholder="Enter your email"
          value={form.code}
          onChange={code => setForm({ ...form, code })}
          iconLeft={<LuLock size={18} />}
          large
        />
      </Column>

      <MainButton>Confirm</MainButton>
    </Form>
  );
};
