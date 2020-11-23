import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { Container, ScreenTitle, Arrow } from './styles';

export default function Header({ haveArrow, screenTitle }) {
  const { goBack } = useNavigation();

  return (
    <Container>
      {haveArrow && (
        <Arrow onPress={() => goBack()}>
          <Feather name="arrow-left" size={24} color="#2D8EFF"/>
        </Arrow>
      )}
      <ScreenTitle>{screenTitle}</ScreenTitle>
    </Container>
  );
}
