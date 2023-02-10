import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'

export const Container = styled.View`
    width: 1px;
    height: ${RFValue(147)}px;
    background-color: ${({theme})=> theme.colors.line};
`;