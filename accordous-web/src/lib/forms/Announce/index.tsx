import InputField from 'src/lib/base/InputField';
import { MainButton } from 'src/lib/base/StyledComponents/Buttons';
import { Hr } from 'src/lib/base/StyledComponents/Divisors';
import { Column } from 'src/lib/base/StyledComponents/Flex';
import { FormLarge } from 'src/lib/base/StyledComponents/Forms';

const AnnounceForm = () => {
  return (
    <FormLarge>
      <Column left gap={4}>
        <h6>Announce owner</h6>
        <Hr />
        <InputField label="Name" />
        <InputField label="Email" />
      </Column>

      <Column left gap={4}>
        <h6>Announce address</h6>
        <Hr />
        <InputField label="Country" />
        <InputField label="State" />
        <InputField label="City" />
        <InputField label="Address" />
      </Column>

      <MainButton>Announce</MainButton>
    </FormLarge>
  );
};

export default AnnounceForm;
