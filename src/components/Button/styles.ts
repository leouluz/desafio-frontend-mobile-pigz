import styled from 'styled-components/native'

import { RectButton } from 'react-native-gesture-handler'

import { RFValue } from 'react-native-responsive-fontsize';
import { LinearGradient } from 'expo-linear-gradient';


export const Container = styled(LinearGradient)`
  width: 100%;
  height: ${RFValue(48)}px;

  padding: 18px;
  border-radius: ${RFValue(16)}px;
  align-items: center;
`;

export const Content = styled(RectButton)`

`;
export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.shape}; 
`;