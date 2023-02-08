import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 80%;

  margin-top: ${RFValue(30)}px;

  border-radius: ${RFValue(16)}px;
  align-items: flex-start;
  justify-content: space-;
  padding: 16px;
  background-color: #fff;
`;

export const TitleCard = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: ${RFValue(16)}px;
  color: ${({theme}) => theme.colors.text_dark};
  margin-bottom: ${RFValue(18)}px;
`;