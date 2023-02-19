import * as S from "./styles";

type InputProps = {
  title: string;
  type: string;
  label: string;
  value: string;
  name: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  error: string;
  onInput?: (e: React.FormEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

const Input = ({
  title,
  type,
  label,
  value,
  name,
  onChange,
  error,
  onInput,
  placeholder,
}: InputProps) => {
  return (
    <S.Wrapper>
      <S.Title style={{ color: error ? "#f62e36" : "#333" }}>{title}</S.Title>
      <S.InputContainer>
        <S.Label htmlFor={name}>{label}</S.Label>
        <S.CustomInput
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          onInput={onInput}
        />
      </S.InputContainer>
      {error && <p>{error}</p>}
    </S.Wrapper>
  );
};

export default Input;
