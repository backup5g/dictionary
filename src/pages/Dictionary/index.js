import React, { useEffect, useState } from 'react';

import letters from '../../mocks/letters';
import words from '../../mocks/words.json';

import Header from '../../components/Header';
import WordsList from '../../components/WordsList';

import { 
  Container, 
  Content,
  LettersContainer,
  Letter,
  Label,
  Helper,
} from './styles';

export default function Dictionary() {
  const [selected, setSelected] = useState('A');
  const [selectedWords, setSelectedWords] = useState();

  useEffect(() => {
    setSelectedWords(words.filter(
      word => word.name[0].toUpperCase() === selected
    ));
  }, [selected]);

  return (
    <Container>
      <Header screenTitle="Dicionário" />

      <LettersContainer 
        horizontal 
        showsHorizontalScrollIndicator={false}
      >
        {letters.map((letter, index) => (
          <Letter 
            key={index}
            $hasSelected={letter === selected}
            onPress={() => setSelected(letter)}
          >
            <Label $hasSelected={selected === letter}>{letter}</Label>
          </Letter>
        ))}

        <Helper />
      </LettersContainer>

      <Content>
        <WordsList 
          title="Todas as palavras"
          words={selectedWords}
        />
      </Content>
    </Container>
  );
}
