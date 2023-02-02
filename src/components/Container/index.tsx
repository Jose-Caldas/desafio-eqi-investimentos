import Header from "../Header/Header";

import { Wrapper, Section, SectionTitle } from "./styles";

export const Container = () => {
  return (
    <Wrapper>
      <Header />
      <Section>
        <SectionTitle>Simulador de investimentos</SectionTitle>
      </Section>
    </Wrapper>
  );
};
