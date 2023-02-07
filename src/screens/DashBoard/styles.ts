import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  margin-top: ${RFValue(20)}px;
  background-color: #fff;
`;