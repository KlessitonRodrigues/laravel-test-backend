import { LuBanknote, LuRuler, LuSearch } from 'react-icons/lu';

import { MainButton } from 'src/lib/base/StyledComponents/Buttons';
import { Column } from 'src/lib/base/StyledComponents/Flex';
import { Form } from 'src/lib/base/StyledComponents/Forms';
import { Input, InputBoxSmall, Label } from 'src/lib/base/StyledComponents/Inputs';

const AnnounceFiltersForm = () => {
  return (
    <Form>
      <Column>
        <Label>
          <b>Country</b>
          <InputBoxSmall>
            <LuSearch size={14} />
            <Input placeholder="Brasil" />
          </InputBoxSmall>
        </Label>
        <Label>
          <b>State</b>
          <InputBoxSmall>
            <LuSearch size={14} />
            <Input placeholder="São Paulo" />
          </InputBoxSmall>
        </Label>
        <Label>
          <b>City</b>
          <InputBoxSmall>
            <LuSearch size={14} />
            <Input placeholder="Ribeirão Preto" />
          </InputBoxSmall>
        </Label>
      </Column>

      <Column>
        <Label>
          <b>Maximum size</b>
          <InputBoxSmall>
            <LuRuler size={16} />
            <Input placeholder="0" />
            <strong>m²</strong>
          </InputBoxSmall>
        </Label>
        <Label>
          <b>Minimum size</b>
          <InputBoxSmall>
            <LuRuler size={16} />
            <Input placeholder="1000" />
            <strong>m²</strong>
          </InputBoxSmall>
        </Label>
      </Column>

      <Column>
        <Label>
          <b>Maximum value</b>
          <InputBoxSmall>
            <LuBanknote size={16} />
            <Input placeholder="0" />
            <strong>$</strong>
          </InputBoxSmall>
        </Label>
        <Label>
          <b>Minimum value</b>
          <InputBoxSmall>
            <LuBanknote size={16} />
            <Input placeholder="100000" />
            <strong>$</strong>
          </InputBoxSmall>
        </Label>
      </Column>
      <MainButton>Search</MainButton>
    </Form>
  );
};

export default AnnounceFiltersForm;
