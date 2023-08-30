import { Button} from '@chakra-ui/react'
import styles from './BlueButton.module.css'


function BlueButton( {icon, text, padx, pady} ) {
  return (
    <Button px={padx} py={pady}>
        {icon}
        {text}
    </Button>
  )
}

export default BlueButton