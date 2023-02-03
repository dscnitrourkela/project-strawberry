import React from 'react'
import styled from 'styled-components';
import tw from 'twin.macro';
import ButtonText from '../../shared/Typography/Button'

const Btn = styled.button`
  ${tw`
    bg-color-primary
    text-white
    rounded-[16px]
    lg:py-[18px]
    lg:px-[28.5px]
    py-[10px]
    px-[16px]
    lg:ml-[40px]
    ml-0
    mt-[14px]
    lg:mt-0
    border-solid
    border-black border-[1px]
    `}
`;


const Button = (props) => {
  return (
    <Btn>
    <ButtonText>
      {props.children}
    </ButtonText>
    </Btn>
  )
}

export default Button