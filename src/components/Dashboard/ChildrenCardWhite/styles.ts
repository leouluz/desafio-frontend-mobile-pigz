import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    width: ${RFValue(92)};
    height: ${RFValue(90)};

    border-width: 1;
    border-radius: ${RFValue(16)};
    border-color: #F0F0F0;

    justify-content: center;
    align-items: center;
    margin-left: 6px;
`;


export const TitleText = styled.Text`
    font-family: ${({theme}) => theme.fonts.regular};
    color: ${({theme})=> theme.colors.border};
`;

export const NumberText = styled.Text`
    font-family: ${({theme}) => theme.fonts.medium};
    font-size: ${RFValue(40)}px;
`;
