import React from 'react'
import ButtonText from './Typography/Button'
import { Btn } from '../../styles/navbar.styles'

const Button = props => {
  return (
    <Btn>
      <ButtonText>{props.children}</ButtonText>
    </Btn>
  )
}

export default Button
