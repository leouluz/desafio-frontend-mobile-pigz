import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { Button } from '../../components/Button'
import CardWhite from '../../components/Dashboard/CardWhite'
import ChildrenCardWhite from '../../components/Dashboard/ChildrenCardWhite'
import { Header } from '../../components/Dashboard/Header'
import InfoCard from '../../components/Dashboard/InfoCard'
import { Input } from '../../components/Input'
import QrCode from '../../assets/qr-code.svg'
import {
    Container,
    TextDescription,
    ViewButton,
    ViewButtonInput,
    ViewButtonScan
} from './styles'

interface Card {
  title: String;
  value: Number;
}

export function Dashboard({navigation}) {

  const arrayValue = [
    {
      title: 'Aceitas',
      value: 15,
    },
    {
      title: 'Rejeitadas',
      value: 5,
    },
    {
      title: 'Total',
      value: 20,
    },
  ];
  return (
    <Container>
        <Header navigation={navigation} />
          <InfoCard />
          <CardWhite title="Resumos das Entregas">
            <FlatList
              data={arrayValue}
              renderItem={({item})=>(<ChildrenCardWhite title={item.title} value={item.value}/>)}
              horizontal
              showsHorizontalScrollIndicator={false}
              />
          </CardWhite>
          <CardWhite title="Iniciar Nova Entrega">
            <TextDescription>Número de Identificação</TextDescription>
            <ViewButtonInput>
              <Input style={{width: '75%'}} />
              <ViewButton >
                <Button title="Ok" onPress={() => console.log('ok')} />
              </ViewButton>
            </ViewButtonInput>
            <ViewButtonScan>
              <Button title="Escanear Qrcode" svg={QrCode}>
              </Button>
            </ViewButtonScan>
          </CardWhite>
    </Container>
  )
}