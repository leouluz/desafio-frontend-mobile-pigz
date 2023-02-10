import React from 'react'
import { Button } from '../../components/Button'
import { ButtonDanger } from '../../components/ButtonDanger'
import { Header } from '../../components/Dashboard/Header'
import { DivLine } from '../../components/DivLine'

import Reject from '../../assets/reject.svg'
import Approve from '../../assets/approve.svg'
import Delivery from '../../assets/delivery.svg'

import {
    Container,
    ViewInfo,
    ViewDescription,
    ViewValueDelivery,
    ViewStoryDelivery,
    TextDelivery,
    TitleDelivery,
    ViewButtons,
    ViewTextDelivery,
    TextDescript,
    TextTitleOrange,
    DeliveryView,
    ViewTimeLine,
    TitleStory,
    TextStory,
    StoryView,
    OrangeBall,
    SmallBall
} from './styles'
import theme from '../../global/styles/theme'
import { DivLineVertical } from '../../components/DivLineVertical'

export function NewDelivery({navigation}) {

  return (
    <Container>
        <Header title="Nova entrega" navigation={navigation} />
        <ViewInfo>
            <ViewDescription>
                <TextDescript>Tempo Estimado</TextDescript>
                <TextTitleOrange>30 min</TextTitleOrange>
            </ViewDescription>
            <ViewDescription>
                <TextDescript>Número de ID</TextDescript>
                <TextTitleOrange>#6789</TextTitleOrange>
            </ViewDescription>
        </ViewInfo>
        <DivLine style={{marginBottom: 20}}/>

        <ViewValueDelivery>
            <ViewDescription>
                <TextDescript>Valor da Entrega</TextDescript>
                <TextTitleOrange style={{fontSize: 35, marginBottom: 35}}>R$ 13,75</TextTitleOrange>
            </ViewDescription>
        </ViewValueDelivery>
            <DeliveryView
                start={{ x: 0.4, y: 1 }} 
                end={{ x: 0.8, y: 1 }} 
                locations={[0.1, 0.9]} 
                colors={[theme.colors.primary_light, theme.colors.primary]}>
                    <Delivery 
                        width={28}
                        height={28}
                    />
                    <ViewTextDelivery>
                        <TitleDelivery>Entrega</TitleDelivery>
                        <TextDelivery>Percurso Total: 8km</TextDelivery>
                    </ViewTextDelivery>
                </DeliveryView>
                <ViewTimeLine>
                    <DivLineVertical/>
                    <StoryView>
                        <ViewStoryDelivery>
                            <OrangeBall
                                colors={[theme.colors.primary_light, theme.colors.primary]}/>
                            <TitleStory>Coleta</TitleStory>
                            <SmallBall />

                            <TextStory>Restaurante Recanto da Peixada Distancia: 2km</TextStory>
                        </ViewStoryDelivery>
                        <ViewStoryDelivery>
                        <OrangeBall
                                colors={[theme.colors.primary_light, theme.colors.primary]}/>
                            <TitleStory>Entrega</TitleStory>
                            <SmallBall />
                            <TextStory>Av: Cabo dos Soldados - Caranã Distancia: 6km</TextStory>
                        </ViewStoryDelivery>
                    </StoryView>
                </ViewTimeLine>
        <ViewButtons>
            <Button svg={Approve} title="Aceitar" onPress={() => console.log('Aceitar')} />
            <ButtonDanger svg={Reject} title="Rejeitar" onPress={() => console.log('Rejeitar')} />
        </ViewButtons>
    </Container>
  )
}