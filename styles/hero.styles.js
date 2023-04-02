import styled from 'styled-components'
import tw from 'twin.macro'
import { Heading3 } from '../components/shared'

export const Hero = styled.section`
  ${tw`
    lg:pt-[210px]
    bg-[url('https://res.cloudinary.com/drpkgjnij/image/upload/v1676356798/Ashutosh%20Rath/stem-list-EVgsAbL51Rk-unsplash_1_edp6ld.png')]
    bg-cover
    h-screen
    w-full
    text-center
    flex
    justify-center
    items-center
    text-white
    flex-col
    mt-0
`}
`

export const TextBox = styled.div`
  ${tw`
    flex
    flex-col
    text-center
    `}
  @media (max-width: 850px) {
    padding-top: 120px;
  }
`
export const ButtonContainer = styled.div`
  ${tw`
    flex
    flex-row
    items-center
    pt-14
`}
  @media (max-width: 850px) {
    padding-top: 50px;
    flex-direction: column;
  }
`
export const Date = styled(Heading3)`
  align-self: center;
`
