import { MainButton } from 'src/lib/base/StyledComponents/Buttons';
import { Hr } from 'src/lib/base/StyledComponents/Divisors';
import { Column } from 'src/lib/base/StyledComponents/Flex';
import { FormLarge } from 'src/lib/base/StyledComponents/Forms';
import { Input, InputBoxSmall, Label } from 'src/lib/base/StyledComponents/Inputs';

const AnnounceForm = () => {
  return (
    <FormLarge>
      <Column left gap={4}>
        <h6>Owner</h6>
        <Hr />
        <Label>
          <b>Name</b>
          <InputBoxSmall>
            <Input />
          </InputBoxSmall>
        </Label>
        <Label>
          <b>Email</b>
          <InputBoxSmall>
            <Input />
          </InputBoxSmall>
        </Label>
      </Column>

      <Column left gap={4}>
        <h6>Address</h6>
        <Hr />
        <Label>
          <b>Country</b>
          <InputBoxSmall>
            <Input />
          </InputBoxSmall>
        </Label>
        <Label>
          <b>State</b>
          <InputBoxSmall>
            <Input />
          </InputBoxSmall>
        </Label>
        <Label>
          <b>City</b>
          <InputBoxSmall>
            <Input />
          </InputBoxSmall>
        </Label>
        <Label>
          <b>Address</b>
          <InputBoxSmall>
            <Input />
          </InputBoxSmall>
        </Label>
      </Column>

      <MainButton>Announce</MainButton>
    </FormLarge>
  );
};

export default AnnounceForm;
