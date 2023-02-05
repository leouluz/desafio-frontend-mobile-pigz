import styled from 'styled-components/native'

export const Container = styled.View`
    width: 75%;
    height: 1px;
    align-self: center;
    margin-left: 8px;
    background-color: ${({theme})=> theme.colors.text_dark};
`;