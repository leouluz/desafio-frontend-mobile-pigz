import React from 'react'
import CardWhite from '../../components/Dashboard/CardWhite'
import { Header } from '../../components/Dashboard/Header'
import InfoCard from '../../components/Dashboard/InfoCard'

import {
    Container
} from './styles'

export function Dashboard() {
  return (
    <Container>
        <Header />
        <InfoCard />
        <CardWhite title="Resumos das Entregas"/>
        <CardWhite title="Iniciar Nova Entrega"/>
    </Container>
  )
}