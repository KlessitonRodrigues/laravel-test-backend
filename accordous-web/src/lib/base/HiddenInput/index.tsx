import { useState } from 'react';
import { LuLock } from 'react-icons/lu';
import { PiEye, PiEyeSlash } from 'react-icons/pi';

import If from '../If';
import InputField from '../InputField';

const HiddenInput = (props: Props.InputField) => {
  const { label, placeholder, value, required, onChange, large } = props;
  const [active, setActive] = useState(false);

  return (
    <InputField
      type={active ? 'text' : 'password'}
      label={label}
      placeholder={placeholder}
      value={value}
      required={required}
      onChange={value => onChange && onChange(value)}
      iconLeft={<LuLock size={18} />}
      iconRight={
        <div onClick={() => setActive(!active)}>
          <If check={active} true={<PiEye size={16} />} false={<PiEyeSlash size={16} />} />
        </div>
      }
      large={!!large}
    />
  );
};
export default HiddenInput;
