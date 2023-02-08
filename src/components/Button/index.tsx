import React from 'react';
import { RectButtonProps  } from 'react-native-gesture-handler'
import { SvgProps } from 'react-native-svg';
import theme from '../../global/styles/theme';

import { Container, Content, Title} from './styles'

interface Props extends RectButtonProps {
  title: String;
  onPress: () => void;
  svg?: React.FC<SvgProps>;
}

export function Button({
  title, 
  onPress, 
  svg: Svg,
  ...rest
} : Props){
  return(
    <Container 
      start={{ x: 0.4, y: 1 }} 
      end={{ x: 0.8, y: 1 }} 
      locations={[0.1, 0.9]} 
      colors={[theme.colors.primary_light, theme.colors.primary]}
    >
      <Content onPress={onPress} {...rest}>
        {
          Svg &&
          <Svg 
            width={20}
            height={20}
            style={{marginRight:8}}
        />
        }
        <Title>
          {title}
        </Title>
      </Content>
    </Container>
  )
}