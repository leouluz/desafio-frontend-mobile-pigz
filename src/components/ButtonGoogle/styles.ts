import styled from 'styled-components/native'

import { RectButton } from 'react-native-gesture-handler'
import { RFValue } from 'react-native-responsive-fontsize';

export const Button = styled(RectButton)`
  height: ${RFValue(48)}px;

  background-color: ${({theme}) => theme.colors.shape};
  border-radius: ${RFValue(16)}px;

  align-items: center;
  flex-direction: row;

  border-width: 1px;
  border-color: ${({theme}) => theme.colors.border};

`;

export const ImageContainer = styled.View`
  justify-content: center;
  align-items: center;

  padding:  ${RFValue(16)}px;
  border-color: ${({theme}) => theme.colors.shape};
  border-right-width: 1px;
`;

export const Text = styled.Text`
  flex:1;
  text-align: center;

  font-family: ${({theme}) => theme.fonts.medium};
  font-size: ${RFValue(16)}px;
  color: ${({theme}) => theme.colors.text};
`;
