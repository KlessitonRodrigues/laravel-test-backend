import { useState } from 'react';
import { LuLock } from 'react-icons/lu';
import { PiEye, PiEyeSlash } from 'react-icons/pi';

import If from '../If';
import { Input, InputBox } from '../StyledComponents/Inputs';

const HiddenInput = (props: Props.HiddenInput) => {
  const { placeholder, value, required, onChange } = props;
  const [active, setActive] = useState(false);

  return (
    <InputBox>
      <LuLock size={18} />
      <Input
        type={active ? 'text' : 'password'}
        placeholder={placeholder}
        value={value}
        required={required}
        onChange={ev => onChange && onChange(ev.target.value)}
      />
      <div onClick={() => setActive(!active)}>
        <If check={active} true={<PiEye size={16} />} false={<PiEyeSlash size={16} />} />
      </div>
    </InputBox>
  );
};

export default HiddenInput;
