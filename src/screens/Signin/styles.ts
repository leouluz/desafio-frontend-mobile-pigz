import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: ${RFValue(24)}px;
`;

export const HeaderView = styled.View`
  align-items: center;
`;

export const TitleText = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.semiBold};
`;

export const TitleTextLogin = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.semiBold};
`;

export const LoginView = styled.View`
  margin-top: ${RFValue(36)}px;
  width: 100%;
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: ${RFValue(16)}px;
`;

export const TitleInput = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.text};
  font-size: ${RFValue(13)}px;
  margin-bottom: ${RFValue(6)}px;
`;

export const TextForgotPassword = styled.Text`
`;

export const AccountView = styled.View`
`;

export const TextAccount = styled.Text`
`;

export const TextCreateAccount = styled.Text`
`;
export const InputEmailView = styled.View`
  width: 100%;
  align-items: flex-start;
`;
export const InputPasswordlView = styled.View`
  width: 100%;
  align-items: flex-start;
`;
