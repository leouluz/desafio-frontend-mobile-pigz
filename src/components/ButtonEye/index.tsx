import { 
  Container, 
} from './styles'

import EyeOpen from '../../assets/eye-open-icon.svg'
import EyeClose from '../../assets/eye-close-icon.svg'

interface Props {
    value: Boolean;
    onPress: () => void;
  }

export default function ButtonEye({onPress, value} : Props) {

  return (
    <Container onPress={onPress}>
        {
            value ?
            <EyeOpen 
                width={26}
                height={21}
            />  :
            <EyeClose 
              width={34}
              height={28}
            />


        }
    </Container>
  )
}