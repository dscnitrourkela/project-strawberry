import styled from 'styled-components'
import tw from 'twin.macro'
import { Heading4, Body1 } from '../components/shared'

export const EventContainer = styled.div`
  ${tw`
    sm:grid
    sm:grid-cols-8
    flex
    flex-col
    sm:gap-x-12
    gap-y-6
    sm:py-6
    py-3
    sm:px-6
    px-3
    overflow-y-auto
    max-h-[90vh]
    mx-auto
    mt-[56px]
    mb-[30px]
    sm:mb-[56px]
    sm:mt-[0]
    border-[2px]
    border-color-primary
    sm:w-auto
    w-[300px]
  `}
`

export const LeftContainer = styled.div`
  ${tw`
    col-span-3
    flex
    flex-col
    gap-4
    sm:gap-5
    items-start
  `}
`

export const EventImage = styled.img`
  ${tw`
    w-full
    object-contain
    border-[2px]
    border-color-primary
  `}
`

export const CompositeContainer = styled.div`
  ${tw`
    flex
    flex-col
    text-left
  `}
`

export const SubHeading = styled(Heading4)`
  ${tw`text-[#AAAAAA]`}
`

export const PrizesAmount = styled(Body1)`
  ${tw`
    text-[#AAAAAA]
  `}
  &>span {
    ${tw`
        text-[#D4D4D4]
    `}
  }
`

export const RightContainer = styled.div`
  ${tw`
    col-span-5
    flex
    flex-col
    gap-6
    sm:gap-9
    items-start
  `}
`

export const AboutContainer = styled.div`
  ${tw`
    p-4
    rounded-[16px]
    max-w-[476px]
    flex-1
    text-left
    flex
    flex-col
    gap-3
    sm:gap-4
    border-[2px]
    border-color-primary
    bg-[rgba(41, 49, 77, 0.4)]
  `}
`

export const ContactContainer = styled.div`
  ${tw`
    flex 
    flex-col
    w-full
    text-left
  `}
`

export const ContactDetails = styled.div`
  ${tw`
    flex
    justify-between
    flex-col
    gap-y-[5px]
    sm:flex-row
  `}
`

export const Contact = styled(Body1)`
  ${tw`
  text-[#AAAAAA]
`}
`

export const Button = styled.button`
  ${tw`
    bg-color-primary
    text-white
    rounded-[16px]
    lg:py-[18px]
    lg:px-[28.5px]
    py-[10px]
    px-[16px]
    ml-0
    border-solid
    border-black
    border-[1px]
`}
`
