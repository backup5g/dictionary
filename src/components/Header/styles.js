import styled from 'styled-components/native';

export const Container = styled.View`
  position: relative;

  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding-top: 32px;
`;

export const ScreenTitle = styled.Text`
  color: #2D8EFF;
  font-family: 'Inter_700Bold';
  font-size: 16px;
`;

export const Arrow = styled.TouchableOpacity`
  position: absolute;

  top: 32px;
  left: 32px;
`;
