import React from "react";

import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import CloseIcon from "@material-ui/icons/Close";
import SearchOutlinedIcon from "@material-ui/icons/Search";
import ForwardOutlinedIcon from "@material-ui/icons/ForwardOutlined";

import {
  Wrapper,
  Header,
  Title,
  Menu,
  Section,
  IconWrapper,
  InputCenter,
  SearchWrapper,
  InputRight,
  SectionTitle,
  Icon,
  Search,
} from "./styles";

export const Container = () => {
  return (
    <Wrapper>
      <Header>
        <Title>Calculadora de investimentos</Title>
        <Menu>
          <IconWrapper>
            <Icon>
              <ForwardOutlinedIcon />
            </Icon>
            <Icon>
              <ForwardOutlinedIcon />
            </Icon>
            <Icon>
              <CloseIcon />
            </Icon>
            <Icon>
              <HomeOutlinedIcon />
            </Icon>
          </IconWrapper>
          <InputCenter />
          <SearchWrapper>
            <Search>
              <SearchOutlinedIcon />
            </Search>
            <InputRight />
          </SearchWrapper>
        </Menu>
      </Header>
      <Section>
        <SectionTitle>Simulador de investimentos</SectionTitle>
      </Section>
    </Wrapper>
  );
};
