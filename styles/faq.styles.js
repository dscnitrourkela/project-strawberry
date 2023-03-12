import styled from 'styled-components'
import tw from 'twin.macro'
import { Body1 } from '../components/shared'

export const Container = styled.section`
  ${tw`
  min-w-full
  lg:px-[128px]
  px-6
`}
`
export const Image = styled.img`
  ${tw`
  h-5
  w-5
  cursor-pointer
  relative
  z-1
`}
`
export const FaqContainer = styled.div`
  .inactive {
    ${tw`
      hidden
    `}
  }
  p {
    padding-top: 5px;
    line-height: 1.4;
  }
`
export const FaqMap = styled.div`
  ${tw`
  mb-5
  px-3
  pt-3
  pb-4
  md:px-9
  rounded-lg
  text-[#E8E8E8]
`}
  border: 0.5px solid #c2c2c2;
`

export const FaqHead = styled.div`
  ${tw`
  flex
  justify-between
  items-center
`}
`
export const Underline = styled.div`
  ${tw`
    h-[4px]
    bg-color-primary
    rounded-lg
    w-[90px]
    mt-2
    mb-9
    sm:w-[135px]
    lg:mb-24
`}
`
export const FaqQuestion = styled(Body1)`
  color: #e8e8e8;
  @media screen and (max-width: 437px) {
    width: 250px;
  }
  @media screen and (max-width: 328px) {
    width: 200px;
  }
`
