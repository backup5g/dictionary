import React, { useState, useEffect } from 'react';

import words from '../../mocks/words.json';

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
  const { english } = route.params;

  const [word, setWord] = useState();

  useEffect(() => {
    setWord(words.find(w => w.name === english));
  }, [english]);


  return (
    <Container>
      <Header screenTitle="Detalhes" haveArrow />

      {word && (
        <Content>
          <Wrapper>
            <Word>{word.name}</Word>

            <Info>
              <Translation>{word.primarymeaning}</Translation>
              <Separator />
              <Silables>{word.syllabicdivision}</Silables>
            </Info>
          </Wrapper>

          <Wrapper>
            <Title>Significado</Title>
            <Description>{word.primaryexample}</Description>
          </Wrapper>

          <Wrapper>
            <Title>Referência</Title>
            <Description>{word.primaryreference}</Description>
          </Wrapper>
        </Content>
      )}
    </Container>
  );
}
