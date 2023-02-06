import React from 'react'
import { Container, Content, TextTeste } from './styles'
import theme from '../../../global/styles/theme'

export default function InfoCard() {
  return (
    <Container 
        start={{ x: 0.1, y: 1 }} 
        end={{ x: 0.8, y: 1 }} 
        locations={[0.1, 0.9]} 
        colors={[theme.colors.primary_light, theme.colors.primary]}
    >
        <TextTeste>teste</TextTeste>
    </Container>
  )
}