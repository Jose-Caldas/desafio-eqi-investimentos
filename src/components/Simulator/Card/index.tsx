import { Header, Wrapper } from "./styles";

import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import Button, { ButtonProps } from "../../Button";

type CardProps = {
  title: string;
  buttonTitle: string;
} & ButtonProps;

export const Card = ({
  title,
  buttonTitle,
  onClick,
  isLoading,
  disabled,
  types,
}: CardProps) => {
  return (
    <Wrapper>
      <Header>
        <h2>{title}</h2>
        <InfoOutlinedIcon fontSize="small" />
      </Header>
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
