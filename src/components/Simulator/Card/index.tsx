import { Wrapper, Title, Value } from "./styles";

type CardProps = {
  title: string;
  value: string | number;
};

export const Card = ({ title, value }: CardProps) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Value>{value}</Value>
    </Wrapper>
  );
};
