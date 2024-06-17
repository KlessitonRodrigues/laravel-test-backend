import { useState } from 'react';
import { LuPlus } from 'react-icons/lu';

import InputField from 'src/lib/base/InputField';
import { MainButton } from 'src/lib/base/StyledComponents/Buttons';
import { Column } from 'src/lib/base/StyledComponents/Flex';
import { FormLarge } from 'src/lib/base/StyledComponents/Forms';
import { isValidEmail, onlyNumbers } from 'src/utils/forms';

const initialState: Forms.PropertyContract = {
  email: '',
  name: '',
  phone: '',
  cnpj: '',
  cpf: '',
};

const PropertyContractForm = (props: Props.Form<Forms.PropertyContract>) => {
  const { onSubmit } = props;
  const [form, setForm] = useState(initialState);

  const handleSubmit = (ev: any) => {
    ev.preventDefault();
    if (!isValidEmail(form.email)) return;
    onSubmit && onSubmit(form);
  };

  return (
    <FormLarge onSubmit={handleSubmit}>
      <Column left gap={4}>
        <InputField
          required
          label="Name *"
          value={form.name}
          onChange={name => setForm({ ...form, name })}
        />
        <InputField
          required
          label="CPF *"
          value={form.cpf}
          onChange={cpf => setForm({ ...form, cpf })}
        />
        <InputField
          required
          label="CNJP *"
          value={form.cnpj}
          onChange={cnpj => setForm({ ...form, cnpj })}
        />
        <InputField
          required
          label="Email *"
          value={form.email}
          onChange={email => setForm({ ...form, email })}
        />
        <InputField
          required
          label="Phone *"
          value={form.phone}
          onChange={phone => setForm({ ...form, phone: onlyNumbers(phone) })}
          iconLeft={<LuPlus size={12} />}
        />
      </Column>

      <MainButton w="10rem">Save</MainButton>
    </FormLarge>
  );
};

export default PropertyContractForm;
