import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  border: 1px solid #E4E6EA;
  border-radius: 5px;

  background: #F5F6F8; 

  padding: 16px;
  margin-bottom: 16px;
`;

export const Translates = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const English = styled.Text`
  color: #3E4E64;
  font-family: 'Inter_700Bold';
  font-size: 20px;
`;

export const Separator = styled.View`
  width: 3px;
  height: 3px;

  border-radius: 1.5px;
  background: #3E4E64;

  margin: 0 8px;
`;

export const Portuguese = styled.Text`
  color: #3E4E64;
  font-family: 'Inter_400Regular';
  font-size: 20px;
`;

export const Silables = styled.Text`
  color: #2D8EFF;
  font-family: 'Inter_700Bold';
  font-size: 14px;

  margin-top: 4px;
`;

export const Description = styled.Text`
  color: #76869D;
  font-family: 'Inter_300Light';
  font-size: 16px;

  margin-top: 8px;
`;

