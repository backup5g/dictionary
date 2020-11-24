import React from 'react';

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

  return (
    <Container>
      <Header haveArrow screenTitle="Pesquisa" />

      <Content>
        <SearchContainer>
          <SearchBar searched={searched} />
        </SearchContainer>

        <WordsList title="Todos os resultados" />
      </Content>
    </Container>
  );
}
