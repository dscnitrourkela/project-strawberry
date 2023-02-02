import styled, { keyframes } from 'styled-components'
import tw from 'twin.macro'
import { Heading3 } from '../components/shared'

export const TickerContainer = styled.div`
  ${tw`
    bg-[#131313]
    w-full 
    overflow-hidden
    py-1
  `}
`
export const SectionTitle = styled(Heading3)`
  ${tw`
    pl-6
    lg:pl-[128px]
`}
`

export const ItemContainer = styled.div`
  ${tw`
    inline-block
    my-2
    mx-12
    h-32
  `}
  @media (max-width: 768px) {
    margin: 0.5rem 0.5rem;
  }
`

export const TickerIcon = styled.img`
  ${tw`
    inline-block
    py-9
    align-middle
`}
  transform: scale(0.8);
`
const ticker = keyframes`
  0% {
    transform: translate(50vw, 0);
  }
  100% {
    transform: translate(-200%, 0);
  }
`

export const TickerMover = styled.div`
  ${tw`
    inline-block
    whitespace-nowrap
  `}

  animation: ${ticker} 40s linear 0s infinite;

  &:hover {
    animation-play-state: paused;
  }

  @media (max-width: 720px) {
    animation: ${ticker} 20s linear 0s infinite;
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
    mb-9
    ml-6
    lg:mb-24
    lg:ml-[128px]
`}
`
