import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

export const MainContainer = styled.div`
  ${tw`
  bg-[#1B1E1F]
  sm:m-0
  lg:px-[120px]
  px-[20px]
  flex
  flex-col
  justify-start
  gap-y-[32px]
  sm:gap-y-[48px]
  `}
`

export const Flexcntn = styled.div`
  ${tw`
    inline-flex
    flex-row
    justify-start
    gap-x-[64px]
    items-center
    `}
  display : flex;
  @media only screen and (max-width: 800px) {
    width: 70vw;
  }
  @media only screen and (max-width: 640px) {    
    width: 89vw;
  }
`

export function Img() {
  return (
    <img
      src={
        'https://res.cloudinary.com/dxsyc4p2j/image/upload/v1675165055/Rectangle_4492_mqcxrv.png'
      }
    ></img>
  )
}

export const ImgContainer = styled.div`
  ${tw`
  `}
  max-width: 562px;
  @media only screen and (max-width: 1024px) {
    display: none;
  }
`

export const Underline = styled.div`
  ${tw`
    h-[4px]
    bg-color-primary
    rounded-lg
    w-[180px]
    sm:w-[285px]
    mt-2
`}
`

export const TextBox = styled.div`
  ${tw`
  h-[220px]
  w-[574px]
  text-white
  text-justify
  h-full
  `}
  word-wrap:break-word;
  @media only screen and (max-width: 1024px) {
    border: 2.5px solid #486ffd;
    border-radius: 10px;
    padding: 4vw;
  }
`
