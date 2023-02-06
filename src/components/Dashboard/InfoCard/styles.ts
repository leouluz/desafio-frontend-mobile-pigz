import { RFValue } from 'react-native-responsive-fontsize';
import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native'

export const Container = styled(LinearGradient)`
  width: 80%;
  height: ${RFValue(110)}px;

  margin-top: ${RFValue(60)}px;

  border-radius: ${RFValue(16)}px;
  align-items: center;
`;

export const TextTeste = styled.Text`

`;

export const Content = styled.View`

`;
