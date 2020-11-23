import React from 'react';

import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import WordsList from '../../components/WordsList';

import {
  Container,
  Content,
  SearchContainer,
  SearchTitle,
} from './styles';

export default function Home() {
  return (
    <Container>
      <Content>
        <Header screenTitle="Tela Inicial" />
        
        <SearchContainer>
          <SearchTitle>Encontre uma nova palavra</SearchTitle>
          <SearchBar />
        </SearchContainer>

        <WordsList title="Últimas adicionadas" />
      </Content>
    </Container>
  );
}
