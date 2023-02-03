import { Wrapper, Label, CustomInput } from "./styles";

export type InputProps = {
  label: string;
  id: string;
  name: string;
};

const Input = ({ label, id, name }: InputProps) => {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <CustomInput type="number" id={id} name={name} />
    </Wrapper>
  );
};

export default Input;
