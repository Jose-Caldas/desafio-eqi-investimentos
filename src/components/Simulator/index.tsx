import { Card } from "./Card";
import { cardData } from "./Card/card.data";
import Income from "./Income";
import Indexing from "./Indexing";
import {
  Wrapper,
  Title,
  Section,
  Options,
  Result,
  SubTitle,
  Grid,
} from "./styles";

const Simulator = () => {
  return (
    <Wrapper>
      <Title>Simulador de investimentos</Title>
      <SubTitle>Simulador</SubTitle>
      <Section>
        <Options>
          <Income />
          <Indexing />
        </Options>

        <Result>
          <Grid>
            {cardData.map((card) => (
              <Card
                key={card.id}
                title={card.title}
                value={card.value}
                id={card.id}
              />
            ))}
          </Grid>
          <SubTitle>Pojeção de Valores</SubTitle>
        </Result>
      </Section>
    </Wrapper>
  );
};

export default Simulator;
