import { Wrapper, Label, CustomInput } from "./styles";

export type InputProps = {
  label: string;
  value: string;
};

const CardIncome = ({ label, value }: InputProps) => {
  return (
    <Wrapper>
      <Label>{`${label.toUpperCase()} (ao ano)`}</Label>
      <CustomInput value={`${value}%`} />
    </Wrapper>
  );
};

export default CardIncome;
