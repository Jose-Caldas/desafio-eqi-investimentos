import { Wrapper, CustomInput, Label } from "./styles";

type InputProps = {
  label: string;
  value: string;
  name: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  error?: string;
};

const Input = ({ label, value, name, onChange, error }: InputProps) => {
  return (
    <Wrapper>
      <Label htmlFor={name}>{label}</Label>
      <CustomInput id={name} name={name} value={value} onChange={onChange} />
      {error && <p>{error}</p>}
    </Wrapper>
  );
};

export default Input;
