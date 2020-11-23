import React from 'react';

import Word from '../Word';

import {  
  Container,
  Title,
  List,
} from './styles';

export default function WordsList({ title }) {
  return (
    <Container>
      <Title>{title}</Title>

      <List>
        <Word 
          english="Dictionary"
          portuguese="Dicionário"
          silables="dic - ti - o - na - ry"
          description="[...] definition and maintenance of standards through its domain..."
        />

        <Word 
          english="Dictionary"
          portuguese="Dicionário"
          silables="dic - ti - o - na - ry"
          description="[...] definition and maintenance of standards through its domain..."
        />

        <Word 
          english="Dictionary"
          portuguese="Dicionário"
          silables="dic - ti - o - na - ry"
          description="[...] definition and maintenance of standards through its domain..."
        />

        <Word 
          english="Dictionary"
          portuguese="Dicionário"
          silables="dic - ti - o - na - ry"
          description="[...] definition and maintenance of standards through its domain..."
        />

        <Word 
          english="Dictionary"
          portuguese="Dicionário"
          silables="dic - ti - o - na - ry"
          description="[...] definition and maintenance of standards through its domain..."
        />
      </List>
    </Container>
  );
}
