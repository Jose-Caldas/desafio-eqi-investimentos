import { Wrapper, Label, CustomInput } from "./styles";

export type InputProps = {
  id: number;
  label: string;
  value?: string;
};

const Input = ({ label, id, value }: InputProps) => {
  return (
    <Wrapper key={id}>
      <Label>{label}</Label>
      <CustomInput value={value} />
    </Wrapper>
  );
};

export default Input;
