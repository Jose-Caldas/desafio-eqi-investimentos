import {
  Wrapper,
  Title,
  Menu,
  IconWrapper,
  InputCenter,
  SearchWrapper,
  Search,
  InputRight,
} from "./styles";

import SearchOutlinedIcon from "@material-ui/icons/Search";
import { iconsHeader } from "./IconsHeader";

const Header = () => {
  return (
    <Wrapper>
      <Title>Calculadora de investimentos</Title>
      <Menu>
        <IconWrapper>{iconsHeader.map((icon) => icon)}</IconWrapper>
        <InputCenter />
        <SearchWrapper>
          <Search>
            <SearchOutlinedIcon />
          </Search>
          <InputRight />
        </SearchWrapper>
      </Menu>
    </Wrapper>
  );
};

export default Header;
