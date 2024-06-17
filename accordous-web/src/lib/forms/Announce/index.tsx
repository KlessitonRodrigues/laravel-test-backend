import { useState } from 'react';
import { LuPlus } from 'react-icons/lu';

import InputField from 'src/lib/base/InputField';
import { MainButton } from 'src/lib/base/StyledComponents/Buttons';
import { Hr } from 'src/lib/base/StyledComponents/Divisors';
import { Column } from 'src/lib/base/StyledComponents/Flex';
import { FormLarge } from 'src/lib/base/StyledComponents/Forms';
import { isValidEmail, onlyNumbers } from 'src/utils/forms';

const initialState: Forms.Property = {
  email: '',
  name: '',
  state: '',
  city: '',
  description: '',
  complement: '',
  neighborhood: '',
  number: '',
  phone: '',
  street: '',
  area: '',
  price: '',
};

const AnnounceForm = (props: Props.Form<Forms.Property>) => {
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
        <h6>Property owner</h6>
        <Hr />
        <InputField
          required
          label="Name *"
          placeholder="Name of property owner"
          value={form.name}
          onChange={name => setForm({ ...form, name })}
        />
        <InputField
          required
          label="Email *"
          placeholder="Email of property owner"
          value={form.email}
          onChange={email => setForm({ ...form, email })}
        />
        <InputField
          required
          label="Phone *"
          placeholder="Phone of property owner"
          value={form.phone}
          onChange={phone => setForm({ ...form, phone: onlyNumbers(phone) })}
          iconLeft={<LuPlus size={12} />}
        />
      </Column>

      <Column left gap={4}>
        <h6>Property address</h6>
        <Hr />
        <InputField
          required
          label="State *"
          placeholder="Property State"
          value={form.state}
          onChange={state => setForm({ ...form, state })}
        />
        <InputField
          required
          label="City *"
          placeholder="Property City"
          value={form.city}
          onChange={city => setForm({ ...form, city })}
        />
        <InputField
          required
          label="Neighborhood  *"
          placeholder="Property Neighborhood"
          value={form.neighborhood}
          onChange={neighborhood => setForm({ ...form, neighborhood })}
        />
        <InputField
          required
          label="Street *"
          placeholder="Property Street"
          value={form.street}
          onChange={street => setForm({ ...form, street })}
        />
        <InputField
          label="Number"
          placeholder="Property Addresss Number"
          value={form.number}
          onChange={number => setForm({ ...form, number: onlyNumbers(number) })}
        />
        <InputField
          label="Complement"
          placeholder="Property Address Complement"
          value={form.complement}
          onChange={complement => setForm({ ...form, complement })}
        />
      </Column>

      <Column left gap={4}>
        <h6>Property description</h6>
        <Hr />
        <InputField
          label="Description *"
          placeholder="Some information about the property"
          value={form.description}
          onChange={description => setForm({ ...form, description })}
        />
        <InputField
          label="Area *"
          placeholder="Property area in m²"
          value={form.area}
          onChange={area => setForm({ ...form, area: onlyNumbers(area) })}
          iconRight={<b>m²</b>}
        />
        <InputField
          label="Price *"
          placeholder="Property price"
          value={form.price}
          onChange={price => setForm({ ...form, price: onlyNumbers(price) })}
          iconRight={<b>$</b>}
        />
      </Column>

      <MainButton>Save</MainButton>
    </FormLarge>
  );
};

export default AnnounceForm;
