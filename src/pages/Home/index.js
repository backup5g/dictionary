import React from 'react';

import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import WordsList from '../../components/WordsList';

import words from '../../mocks/words.json';

import {
  Container,
  Content,
  SearchContainer,
  SearchTitle,
} from './styles';

export default function Home() {
  const lastWords = words.reverse();

  return (
    <Container>
      <Header screenTitle="Tela Inicial" />

      <Content>
        <SearchContainer>
          <SearchTitle>Encontre uma nova palavra</SearchTitle>
          <SearchBar searched="" />
        </SearchContainer>

        <WordsList title="Últimas adicionadas" words={lastWords} />
      </Content>
    </Container>
  );
}
