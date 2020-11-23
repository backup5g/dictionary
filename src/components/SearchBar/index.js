import React, { useState, useCallback } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { Container, Input } from './styles';

export default function SearchBar({ searched }) {
  const { navigate } = useNavigation();

  const [text, setText] = useState(searched);
  const [iconColor, setIconColor] = useState('#98A4B5');

  const handleInputBlur = useCallback(() => {
    if (text) {
      return;
    }

    setIconColor('#98A4B5');
  }, [text]);

  return (
    <Container>
      <Feather
        name="search" 
        size={20} 
        color={iconColor} 
      />
      
      <Input 
        value={text}
        onChangeText={inputText => setText(inputText)}

        placeholder="Pesquise algo interessante" 
        placeholderTextColor="#98A4B5"

        onFocus={() => setIconColor('#2D8EFF')}
        onBlur={handleInputBlur}

        onEndEditing={() => navigate('Search', { searched: text })}
      />
    </Container>
  );
}
