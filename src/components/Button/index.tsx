import React from 'react';
import { RectButtonProps  } from 'react-native-gesture-handler'
import theme from '../../global/styles/theme';

import { Container, Content, Title} from './styles'

interface Props extends RectButtonProps {
  title: String;
  onPress: () => void;
}

export function Button({
  title, 
  onPress, 
  ...rest
} : Props){
  return(
    <Container colors={[theme.colors.primary, theme.colors.primary_light]} >
      <Content onPress={onPress} {...rest}>
        <Title>
          {title}
        </Title>
      </Content>
    </Container>
  )
}