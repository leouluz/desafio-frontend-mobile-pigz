import React from 'react'
import { 
  Container,
  TitleCard
} from './styles'

interface Props {
    title: string;
}

export default function CardWhite({ title } : Props) {

  return (
    <Container style={{
        shadowColor: "#000",
        shadowOffset: {
            width: 1,
            height: 3,
        },
        shadowOpacity: 0.3,
        shadowRadius: 3,

        elevation: 8,
    }}>
        <TitleCard>{title}</TitleCard>
    </Container>
  )
}