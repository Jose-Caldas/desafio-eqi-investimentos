import * as S from "./styles";

import SearchOutlinedIcon from "@material-ui/icons/Search";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import CloseIcon from "@material-ui/icons/Close";
import ForwardOutlinedIcon from "@material-ui/icons/ForwardOutlined";

const Header = () => {
  return (
    <S.Wrapper>
      <S.Title>Calculadora de investimentos</S.Title>
      <S.Menu>
        <S.IconWrapper>
          <S.Icon>
            <ForwardOutlinedIcon />
          </S.Icon>
          <S.Icon>
            <ForwardOutlinedIcon />
          </S.Icon>
          <S.Icon>
            <CloseIcon />
          </S.Icon>
          <S.Icon>
            <HomeOutlinedIcon />
          </S.Icon>
        </S.IconWrapper>
        <S.InputCenter />
        <S.SearchWrapper>
          <S.Search>
            <SearchOutlinedIcon />
          </S.Search>
          <S.InputRight />
        </S.SearchWrapper>
      </S.Menu>
    </S.Wrapper>
  );
};

export default Header;
