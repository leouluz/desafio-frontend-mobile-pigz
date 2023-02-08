import React, { ReactNode } from 'react'
import { 
  Container,
  TitleText,
  NumberText,
} from './styles'

interface Props {
    title: string;
    value: number;
}

export default function ChildrenCardWhite({title, value}: Props) {

  return (
    <Container>
      <TitleText>{title}</TitleText>
      <NumberText>{value}</NumberText>
    </Container>
  )
}