import { LinearGradient } from "expo-linear-gradient";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  padding-top: ${RFValue(25)};
  background-color: #fff;
`;

export const ViewInfo = styled.View`
    width: 100%;
    justify-content: space-around;
    flex-direction: row;

    margin-bottom: 13px;
    margin-top: 44px;
`;


export const ViewDescription = styled.View`
    justify-content: center;
    align-items: center;
`;

export const ViewValueDelivery = styled.View`
`;

export const OrangeBall = styled(LinearGradient)`
  height: 15px;
  width: 15px;
  margin-left: -23;
  margin-bottom: -20;
  border-radius: 50%;
`;

export const SmallBall = styled.View`
  height: 9px;
  width: 9px;

  position: absolute;
  left: -10%;
  top: 60%;

  border-color: ${({theme})=> theme.colors.primary};
  background-color: ${({theme})=> theme.colors.shape};
  border-width: 1px;
  border-radius: 50%;
`;

export const ViewStoryDelivery = styled.View`
    margin: 15px 0px 15px 15px;
`;

export const StoryView = styled.View`
  flex-direction: column;
`;

export const ViewTimeLine = styled.View`
    width: 60%;
    flex-direction: row;
    justify-content: flex-start;
    padding-bottom: 40px;
`;

export const ViewTextDelivery = styled.View`
    margin-left: ${RFValue(12)}px;
`;


export const ViewButtons = styled.View`
    width: 80%;
    height: 120px;
    justify-content: space-around;
`;

export const TextDescript = styled.Text`
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: 14px;
    color: ${({theme}) => theme.colors.text_description};
`;

export const TextTitleOrange = styled.Text`
    font-family: ${({theme}) => theme.fonts.bold};
    font-size: 20px;
    color: ${({theme}) => theme.colors.primary};
`;
export const DeliveryView = styled(LinearGradient)`
    width: 80%;
    height: ${RFValue(50)}px;

    border-radius: ${RFValue(16)}px;
    flex-direction: row;
    justify-content: flex-start;
    padding-left: ${RFValue(20)}px;
    align-items: center;
`;

export const TextDelivery = styled.Text`
  font-family: ${({ theme }) => theme.fonts.roboto_regular};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.shape}; 
`;

export const TitleDelivery = styled.Text`
  font-family: ${({ theme }) => theme.fonts.roboto_medium};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.shape}; 
`;

export const TitleStory = styled.Text`
  font-family: ${({ theme }) => theme.fonts.roboto_medium};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 10px;
`;

export const TextStory = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text_description}; 
`;
