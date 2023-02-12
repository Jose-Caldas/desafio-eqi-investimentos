import { CircularProgress } from "@material-ui/core";
import { ButtonHTMLAttributes } from "react";
import { Wrapper } from "./styles";
import { buttonTypes } from "./variants";

export type ButtonProps = {
  title: string;
  isLoading?: boolean;
  disabled?: boolean;
  types: "primary" | "secondary";
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  title,
  isLoading = false,
  disabled,
  types = "primary",
  ...props
}: ButtonProps) => {
  const buttonVariants = buttonTypes[types];

  const buttonStyle = disabled
    ? buttonVariants.disabled
    : buttonVariants.enabled;

  return (
    <Wrapper
      disabled={isLoading || disabled}
      style={{
        ...buttonStyle.button,
      }}
      {...props}
    >
      {isLoading ? <CircularProgress size={15} color="inherit" /> : title}
    </Wrapper>
  );
};

export default Button;
