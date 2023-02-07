import { RFValue } from 'react-native-responsive-fontsize';
import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native';

export const Container = styled(LinearGradient)`
  width: 80%;
  height: ${RFValue(110)}px;

  margin-top: ${RFValue(60)}px;

  border-radius: ${RFValue(16)}px;
  align-items: center;
  justify-content: space-around;
  padding: 16px;
`;

export const DayView = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const TitleCard = styled.Text`
  font-family: ${({theme}) => theme.fonts.medium};
  font-size: ${RFValue(16)}px;
  color: ${({theme}) => theme.colors.shape};
`;

export const TextValue = styled.Text`
  font-family: ${({theme}) => theme.fonts.roboto_bold};
  font-size: ${RFValue(30)}px;
  color: ${({theme}) => theme.colors.shape};
`;

export const IconButton = styled(TouchableOpacity)`
  align-items: center;
  justify-content: center;
`;
