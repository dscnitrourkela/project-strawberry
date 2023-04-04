import styled from 'styled-components'
import tw from 'twin.macro'
import { Heading3, Body2 } from '../components/shared'
export const EventsContainer = styled.div`
  ${tw`
  grid
  gap-4
  md:gap-x-10
  gap-y-8
  m-auto
  pb-4
 `}
  grid-template-columns: repeat(3, 384px);
  grid-template-rows: repeat(3, 260px);
  @media (max-width: 1300px) {
    grid-template-columns: repeat(2, 384px);
    grid-template-rows: repeat(4, 260px);
  }
  @media (max-width: 844px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 150px);
  }
  @media (max-width: 374px) {
    grid-template-columns: repeat(2, 130px);
    grid-template-rows: repeat(4, 105px);
  }
`

export const FlippingEventsCard = styled.div`
  transition: all 0.6s ease;
  transform-style: preserve-3d;
`

export const FlippingEventsContainer = styled.div`
  &:hover ${FlippingEventsCard} {
    transform: rotateY(180deg);
  }
`

const common = styled.div`
  ${tw`
  absolute
  top-0
  left-0
  w-full
  h-full
  rounded-xl
  text-center
  flex
  flex-col
  items-center
  justify-center
`}
  backface-visibility: hidden;
  box-shadow: 0px 0px 6px 0.5px rgba(255, 255, 255, 0.8);
  background-image: linear-gradient(
    140deg,
    rgba(73, 112, 255, 0.4) 0%,
    rgba(255, 255, 255, 0) 100%
  );
`

const EventsFront = styled(common)`
  ${tw`
  rounded-xl
  `}
`

const EventsBack = styled(common)`
  transform: rotateY(180deg);
`

export const FrontText = styled(Heading3)`
  ${tw`pt-8`}
  @media (max-width: 844px) {
    ${tw`
    text-sm
    pt-4
    `}
  @media (max-width: 375px) {
    ${tw`
    text-sm
    pt-1
    `}
  }
`
export const BackText = styled(Body2)`
  ${tw`
  pt-2
  pb-2
  px-4`}
  @media (max-width: 844px) {
    ${tw`
    text-base
    overflow-y-scroll
    pb-4
    px-2
    `}
    line-height: 12px;
    font-size: 10px;
  }
`

export const Front = styled(EventsFront)`
  ${tw`
    w-[384px]
    h-[260px]
    text-white
    relative
  `}
  @media (max-width: 844px) {
    ${tw`
    m-auto
    w-[150px]
    h-[150px]
    `}
  }
  @media (max-width: 374px) {
    ${tw`
    w-[120px]
    h-[120px]
    `}
  }
`
export const Back = styled(EventsBack)`
  ${`
  flex
  items-center
  justify-center
 `}
  @media (max-width: 374px) {
    ${tw`
    w-[120px]
    h-[120px]
  `}
  }
`

export const Logo = styled.img`
  ${tw`
  w-24
  h-24
`}
  @media (max-width: 844px) {
    ${tw`
    w-[50px]
    h-[50px]
  `}
  }
`

export const FlippingCard = ({ children }) => (
  <FlippingEventsContainer>
    <FlippingEventsCard>{children}</FlippingEventsCard>
  </FlippingEventsContainer>
)
