import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  padding-top: ${RFValue(25)};
  background-color: #fff;
`;

export const TextDescription = styled.Text`
  font-size: ${RFValue(12)}px;
  color: ${({theme}) => theme.colors.text_description};
  margin-bottom: ${RFValue(6)}px;
`;

export const ViewButtonInput = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

export const ViewButton = styled.View`
  width: ${RFValue(50)}px;
`;
export const ViewButtonScan = styled.View`
  width: 100%;
  margin-bottom: ${RFValue(10)}px;
  margin-top: ${RFValue(16)}px;
`;