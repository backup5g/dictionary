import React from 'react';

import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import WordsList from '../../components/WordsList';

import { 
  Container,
  Content,
  SearchContainer,
  SearchTitle
} from './styles';

export default function Search() {
  return (
    <Container>
      <Content>
        <Header haveArrow screenTitle="Pesquisa" />

        <SearchContainer>
          <SearchBar />
        </SearchContainer>

        <WordsList title="Todos os resultados" />
      </Content>
    </Container>
  );
}
