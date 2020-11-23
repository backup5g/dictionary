import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  background: #FAFAFC;
  padding: 0 32px;
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;

  padding-bottom: 16px;
`;

export const SearchContainer = styled.View`
  width: 100%;

  align-items: flex-start;

  margin-top: 48px;
`;

export const SearchTitle = styled.Text`
  max-width: 276px;

  color: #081F2C;
  font-family: 'Inter_900Black';
  font-size: 32px;
`;
