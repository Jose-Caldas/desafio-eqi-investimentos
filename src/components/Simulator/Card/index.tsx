import { Wrapper, Title, Value } from "./styles";

type CardProps = {
  id: number;
  title: string;
  value: string;
};

export const Card = ({ title, value, id }: CardProps) => {
  return (
    <Wrapper key={id}>
      <Title>{title}</Title>
      <Value>{value}</Value>
    </Wrapper>
  );
};
