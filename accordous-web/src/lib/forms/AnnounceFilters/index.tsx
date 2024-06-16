import { LuBanknote, LuRuler, LuSearch } from 'react-icons/lu';

import InputField from 'src/lib/base/InputField';
import { MainButton } from 'src/lib/base/StyledComponents/Buttons';
import { Column } from 'src/lib/base/StyledComponents/Flex';
import { Form } from 'src/lib/base/StyledComponents/Forms';

const AnnounceFiltersForm = () => {
  return (
    <Form>
      <Column>
        <InputField
          label="Country"
          iconLeft={<LuSearch size={14} />}
          placeholder="Brasil"
          required
        />
        <InputField
          label="State"
          iconLeft={<LuSearch size={14} />}
          placeholder="São Paulo"
          required
        />
        <InputField
          label="City"
          iconLeft={<LuSearch size={14} />}
          placeholder="Ribeirão Preto"
          required
        />
      </Column>

      <Column>
        <InputField
          required
          label="Maximum size"
          placeholder="Brasil"
          iconLeft={<LuRuler size={16} />}
          iconRight={<strong>m²</strong>}
        />
        <InputField
          required
          label="Minimum size"
          placeholder="São Paulo"
          iconLeft={<LuRuler size={16} />}
          iconRight={<strong>m²</strong>}
        />
      </Column>

      <Column>
        <InputField
          required
          label="Maximum value"
          placeholder="0"
          iconLeft={<LuBanknote size={16} />}
          iconRight={<strong>$</strong>}
        />
        <InputField
          required
          label="Minimum value"
          placeholder="100000"
          iconLeft={<LuBanknote size={16} />}
          iconRight={<strong>$</strong>}
        />
      </Column>
      <MainButton>Search</MainButton>
    </Form>
  );
};

export default AnnounceFiltersForm;
