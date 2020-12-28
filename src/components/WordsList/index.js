import React from 'react';

import Word from '../Word';

import {  
  Container,
  Title,
  List,
} from './styles';

export default function WordsList({ title, words }) {
  return (
    <Container>
      <Title>{title}</Title>

      <List>
        {words && words.map(word => (
          <Word
            key={word.id} 
            english={word.name}
            portuguese={word.primarymeaning}
            silables={word.syllabicdivision}
            description={word.primaryexample}
          />
        ))}
      </List>
    </Container>
  );
}
