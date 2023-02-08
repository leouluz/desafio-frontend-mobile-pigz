import React from 'react'

import {
    Container,
    TextTitle
} from './styles'

import ArrowBack from '../../../assets/arrow_back.svg'
import { View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export function Header({ navigation }) {
  

  return (
    <Container>
      <TouchableOpacity onPress={() => navigation.goBack()} >
        <ArrowBack 
            width={24}
            height={24}
        />
      </TouchableOpacity>
        <TextTitle>Visão geral</TextTitle>
        <View></View>
    </Container>
  )
}