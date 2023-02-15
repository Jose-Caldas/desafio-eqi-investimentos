import * as S from "./styles";

type InputProps = {
  title: string;
  type: string;
  value: string;
  name: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  required?: boolean;
  error?: boolean;
};

const Input = ({
  title,
  type,
  value,
  name,
  onChange,
  required,
  error,
}: InputProps) => {
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.InputContainer>
        <S.Label htmlFor={name}>R$</S.Label>
        <S.CustomInput
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder="000,00"
          required={required}
        />
      </S.InputContainer>
      {error && <p>Este campo deve ser preenchido</p>}
    </S.Wrapper>
  );
};

export default Input;
