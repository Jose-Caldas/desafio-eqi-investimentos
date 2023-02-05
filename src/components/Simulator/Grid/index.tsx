import { Wrapper } from "./styles";

type GridProps = {
  children: React.ReactNode;
};

const Grid = ({ children }: GridProps) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Grid;
