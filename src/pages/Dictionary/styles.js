import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  background: #FAFAFC;
`;

export const Content = styled.View`
  position: relative;

  flex: 1;
  align-items: center;

  padding: 0 32px 16px 32px;
`;

export const LettersContainer = styled.ScrollView`
  margin-top: 48px;
  padding: 0 32px;
`;

export const Letter = styled.TouchableOpacity`
  width: 48px;
  height: 48px;

  align-items: center;
  justify-content: center;

  border: 1px solid #E4E6EA;
  border-radius: 5px;

  background: ${({ $hasSelected }) => $hasSelected ? '#2D8EFF' : '#F5F6F8'};

  margin-right: 16px;
`;

export const Label = styled.Text`
  color: ${({ $hasSelected }) => $hasSelected ? '#fff' : '#8694A8'};
  font-family: 'Inter_700Bold';
  font-size: 20px;
`;

export const Helper = styled.View`
  width: 48px;
  height: 48px;
`
