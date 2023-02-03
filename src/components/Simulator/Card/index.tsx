import { Header, Wrapper, Title } from "./styles";

import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import Button, { ButtonProps } from "../../Button";
import Input, { InputProps } from "../../Input";

type CardProps = {
  title: string;
  buttonTitle: string;
} & ButtonProps &
  InputProps;

export const Card = ({
  title,
  buttonTitle,
  onClick,
  isLoading,
  disabled,
  types,
  label,
  id,
  name,
}: CardProps) => {
  return (
    <Wrapper>
      <Header>
        <Title>{title}</Title>
        <InfoOutlinedIcon fontSize="small" />
      </Header>
      <Input label={label} id={id} name={name} />
      <Button
        title={buttonTitle}
        onClick={onClick}
        isLoading={isLoading}
        disabled={disabled}
        types={types}
      />
    </Wrapper>
  );
};
