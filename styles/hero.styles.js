import styled from 'styled-components'
import tw from 'twin.macro'
import { Heading3, Button } from '../components/shared'

export const Hero = styled.section`
  ${tw`
    lg:pt-[210px]
    bg-[url('https://res.cloudinary.com/dhnkuonev/image/upload/v1674444891/stem-list-EVgsAbL51Rk-unsplash_1_qyakrg.png')]
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
    text-left
`}
`
export const ButtonContainer = styled.div`
  ${tw`
    flex
    flex-row
    items-center
    pt-14
`}
  @media (max-width: 850px) {
    flex-direction: column;
  }
`
export const Date = styled(Heading3)`
  align-self: center;
`
export const Button1 = styled(Button)`
  height: 60px;
  width: 240px;
  background-color: #486ffd;
  color: black;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 36px;
  @media (max-width: 850px) {
    margin-right: 0px;
    height: 40px;
    width: 160px;
    margin-bottom: 12px;
  }
`
export const Button2 = styled(Button)`
  height: 60px;
  width: 240px;
  background-color: transparent;
  color: #486ffd;
  border: 3px solid #486ffd;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 850px) {
    height: 40px;
    width: 160px;
    flex-direction: column;
  }
`
