import styled from 'styled-components/native'

import { RectButton } from 'react-native-gesture-handler'

import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  width: 100%;
  height: ${RFValue(48)}px;

  border-radius: ${RFValue(16)}px;
  align-items: center;
  border-width: 1px;
  border-color: ${({theme}) => theme.colors.primary};
`;

export const Content = styled(RectButton)`
  width: 100%;
  height: ${RFValue(48)}px;
  flex-direction: row;
  justify-content: center;

  padding: 18px;
  border-radius: ${RFValue(16)}px;
  align-items: center;
`;
export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.primary}; 
`;