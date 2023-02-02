import { CircularProgress } from "@material-ui/core";
import { Wrapper } from "./styles";
import { buttonTypes } from "./variants";

export type ButtonProps = {
  title: string;
  onClick: () => void;
  isLoading?: boolean;
  disabled?: boolean;
  types: "primary" | "secondary";
};

const Button = ({
  title,
  onClick,
  isLoading = false,
  disabled,
  types = "primary",
}: ButtonProps) => {
  const buttonVariants = buttonTypes[types];

  const buttonStyle = disabled
    ? buttonVariants.disabled
    : buttonVariants.enabled;

  return (
    <Wrapper
      onClick={onClick}
      disabled={isLoading || disabled}
      style={{
        ...buttonStyle.button,
      }}
    >
      {isLoading ? <CircularProgress size={15} /> : title}
    </Wrapper>
  );
};

export default Button;
