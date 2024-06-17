import { Input, InputBox, Label } from '../StyledComponents/Inputs';

const InputField = (props: Props.InputField) => {
  const { type, placeholder, value, onChange, required, label, iconLeft, iconRight, large } = props;

  return (
    <Label>
      <b>{label}</b>
      <InputBox large={!!large}>
        {iconLeft}
        <Input
          type={type}
          required={required}
          value={value}
          onChange={ev => onChange && onChange(ev.target.value)}
          placeholder={placeholder}
        />
        {iconRight}
      </InputBox>
    </Label>
  );
};

export default InputField;
