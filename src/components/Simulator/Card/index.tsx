import { Wrapper, Title, Value } from "./styles";

type CardProps = {
  // id: number;
  title: string;
  value: number;
};

export const Card = ({ title, value }: CardProps) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Value>{value}</Value>
    </Wrapper>
  );
};
