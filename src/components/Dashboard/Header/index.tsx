import React from 'react'

import {
    Container,
    TextTitle
} from './styles'

import ArrowBack from '../../../assets/arrow_back.svg'
import { View } from 'react-native'

export function Header() {
  return (
    <Container>
        <ArrowBack 
            width={24}
            height={24}
        />
        <TextTitle>Visão geral</TextTitle>
        <View></View>
    </Container>
  )
}