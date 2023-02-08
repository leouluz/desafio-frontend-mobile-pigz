import React, { useState } from 'react'
import { 
  Container, 
  DayView,
  TitleCard,
  TextValue,
} from './styles'
import theme from '../../../global/styles/theme'

import ButtonEye from '../../ButtonEye';

export default function InfoCard() {

  const [ showValue, setShowValue ] = useState<Boolean>(true);

  return (
    <Container 
        start={{ x: 0.1, y: 1 }} 
        end={{ x: 0.8, y: 1 }} 
        locations={[0.1, 0.9]} 
        colors={[theme.colors.primary_light, theme.colors.primary]}
    >
      <DayView>
        <TitleCard>Ganhos do Dia</TitleCard>
        <TitleCard>29/07</TitleCard>
      </DayView>
      <DayView>
        <TextValue>{`${showValue ? 'R$ 150' : '----'}`}</TextValue>
        <ButtonEye onPress={() => setShowValue(!showValue)} value={showValue} />
      </DayView>
    </Container>
  )
}