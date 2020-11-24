import React from 'react';

import Header from '../../components/Header';

import { 
  Container, 
  Content,
  Wrapper,
  Word,
  Info,
  Translation,
  Separator,
  Silables,
  Title,
  Description
} from './styles';

export default function Details({ route }) {
  const { word } = route.params;

  return (
    <Container>
      <Header screenTitle="Detalhes" haveArrow />

      <Content>
        <Wrapper>
          <Word>{word}</Word>

          <Info>
            <Translation>Dicionário</Translation>
            <Separator />
            <Silables>dic - ti - o - na - ry</Silables>
          </Info>
        </Wrapper>

        <Wrapper>
          <Title>Significado</Title>
          <Description>
            [...] definition and maintenance of standards 
            through its domain dictionary, naming standards 
            editor and data type standards editor.
          </Description>
        </Wrapper>
      </Content>
    </Container>
  );
}
