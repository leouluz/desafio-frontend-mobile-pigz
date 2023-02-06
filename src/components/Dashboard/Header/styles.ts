import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'

export const Container = styled.View`
  padding: ${RFValue(16)}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: ${RFValue(70)}px;
  width: 100%;
`;

export const TextTitle = styled.Text`
    font-family: ${({theme}) => theme.fonts.medium};
    font-size: ${RFValue(18)}px;
`;