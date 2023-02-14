import * as S from "./styles";

const SelectMonth = () => {
  const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <S.Wrapper>
      <S.Title>Prazo (em meses)</S.Title>
      <S.CustomSelect placeholder="prazo em meses">
        {months.map((month) => (
          <option key={month}>{month}</option>
        ))}
      </S.CustomSelect>
    </S.Wrapper>
  );
};

export default SelectMonth;
