import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 80%;
  height: ${RFValue(110)}px;

  margin-top: ${RFValue(60)}px;

  border-radius: ${RFValue(16)}px;
  align-items: flex-start;
  padding: 16px;
  background-color: #fff;
`;

export const TitleCard = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: ${RFValue(16)}px;
  color: ${({theme}) => theme.colors.text_dark};
`;