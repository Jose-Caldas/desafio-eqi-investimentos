import * as S from "./styles";

type InputProps = {
  label: string;
  value: string;
  name: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  error?: string;
};

const Input = ({ label, value, name, onChange, error }: InputProps) => {
  return (
    <S.Wrapper>
      <S.Label htmlFor={name}>{label}</S.Label>
      <S.CustomInput id={name} name={name} value={value} onChange={onChange} />
      {error && <p>{error}</p>}
    </S.Wrapper>
  );
};

export default Input;
