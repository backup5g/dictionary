import React, { useEffect, useState } from 'react';

import words from '../../mocks/words.json';

import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import WordsList from '../../components/WordsList';

import { 
  Container,
  Content,
  SearchContainer,
} from './styles';

export default function Search({ route }) {
  const { searched } = route.params;
  const [searchedWords, setSearchedWords] = useState();

  useEffect(() => {
    setSearchedWords(words.filter(
      word => word.name.includes(searched) 
        || word.primarymeaning.includes(searched)
    ));
  }, [searched]);

  return (
    <Container>
      <Header haveArrow screenTitle="Pesquisa" />

      <Content>
        <SearchContainer>
          <SearchBar searched={searched} />
        </SearchContainer>

        <WordsList title="Todos os resultados" words={searchedWords} />
      </Content>
    </Container>
  );
}
