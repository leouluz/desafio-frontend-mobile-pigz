import React from 'react'

import {
    Container,
    TextTitle
} from './styles'

import ArrowBack from '../../../assets/arrow_back.svg'
import { View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { NavigationProp } from '@react-navigation/native'

interface Props {
  title: String;
  navigation: any;
}

export function Header({ navigation, title } : Props) {

  return (
    <Container>
      <TouchableOpacity onPress={() => navigation.goBack()} >
        <ArrowBack 
            width={24}
            height={24}
        />
      </TouchableOpacity>
        <TextTitle>{title}</TextTitle>
        <View></View>
    </Container>
  )
}