import { Input, InputBoxSmall, Label } from '../StyledComponents/Inputs';

const InputField = (props: Props.InputField) => {
  const { placeholder, value, onChange, required, label, iconLeft, iconRight } = props;

  return (
    <Label>
      <b>{label}</b>
      <InputBoxSmall>
        {iconLeft}
        <Input
          required={required}
          value={value}
          onChange={ev => onChange && onChange(ev.target.value)}
          placeholder={placeholder}
        />
        {iconRight}
      </InputBoxSmall>
    </Label>
  );
};

export default InputField;
