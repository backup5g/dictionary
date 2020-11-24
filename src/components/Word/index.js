import React from 'react';

import { useNavigation } from '@react-navigation/native';

import { 
  Container,
  Translates,
  English,
  Separator,
  Portuguese,
  Silables,
  Description,
} from './styles';

export default function Word({ english, portuguese, silables, description }) {
  const { navigate } = useNavigation();

  return (
    <Container onPress={() => navigate('Details', { word: english })}>
      <Translates>
        <English>{english}</English>
        <Separator />
        <Portuguese>{portuguese}</Portuguese>
      </Translates>

      <Silables>{silables}</Silables>

      <Description>{description}</Description>
    </Container>
  );
}
