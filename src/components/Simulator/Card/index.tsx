import { Wrapper, Title, Value } from "./styles";

type CardProps = {
  title: string;
  value: string;
};

export const Card = ({ title, value }: CardProps) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Value>{value}</Value>
    </Wrapper>
  );
};
