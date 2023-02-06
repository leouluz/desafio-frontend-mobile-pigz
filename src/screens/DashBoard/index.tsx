import React from 'react'
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
    </Container>
  )
}