import React from 'react'
import ButtonText from './Typography/Button'
import { Btn } from '../../styles/NavBar.styles'

const Button = props => {
  return (
    <Btn>
      <ButtonText>{props.children}</ButtonText>
    </Btn>
  )
}

export default Button
