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

export const Wrapper = styled.View`
  width: 100%;
  margin-top: 48px;
`;

export const Word = styled.Text`
  color: #081F2C;
  font-family: 'Inter_700Bold';
  font-size: 48px;
`;

export const Info = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;

  margin-top: 8px;
`;

export const Translation = styled.Text`
  color: #65758C;
  font-family: 'Inter_400Regular';
  font-size: 24px;
`;

export const Separator = styled.View`
  width: 3px;
  height: 3px;

  border-radius: 1.5px;
  background: #3E4E64;

  margin: 0 8px;
`;

export const Silables = styled.Text`
  color: #65758C;
  font-family: 'Inter_600SemiBold';
  font-size: 20px;
`;

export const Title = styled.Text`
  color: #081F2C;
  font-family: 'Inter_400Regular';
  font-size: 24px;

  margin-bottom: 20px;
`;

export const Description = styled.Text`
  color: #65758C;
  font-family: 'Inter_300Light';
  font-size: 20px;
`;

export const Image = styled.Image`
  width: 100%;
`;