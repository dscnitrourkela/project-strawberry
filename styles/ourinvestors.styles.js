import styled from 'styled-components'
import tw from 'twin.macro'
import { Heading3 } from '../components/shared'

// Tailwind CSS properties starts

export const Flex = styled.div`
  ${tw`
  flex
`}
`
export const CarouselContainer = styled.section`
  ${tw`
  relative
  overflow-hidden
`}
`

export const Container = styled.div`
  ${tw`
  flex
  justify-center
  mx-auto
  px-[25px]
  py-[0px]
  w-full
`}
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
export const SectionTitle = styled(Heading3)`
  ${tw`
    pl-6
    lg:pl-[128px]
`}
`

export const CarouselButton = styled.button`
  ${tw`
    absolute
    cursor-pointer
    top-[40%]
    z-[8]
    border-none
  `}
`

export const InvestorImage = styled.img`
  ${tw`
  w-[113px]
  h-[84px]
  sm:w-[300px]
  sm:h-[220px]
  mt-[19px]
  sm:mt-[41px]
  mb-[2px]
  sm:mb-[21px]
  object-cover
  rounded-2xl
  overflow-hidden
`}
`

export const Name = styled.div`
  ${tw`
  text-sm
  sm:text-2xl
  font-medium
  sm:font-black
  font-Inter
  leading-[17px]
  sm:leading-[29px]
  mb-[4px]
  text-center
  sm:mb-[9px]
  min-w-[122px]
`}
`
export const Designation = styled.div`
  ${tw`
  text-xs
  sm:text-xl
  leading-[16px]
  sm:leading-[15px]
  sm:mb-[25px]
  mb-[8px]
  text-center
  min-w-[132px]
`}
`
export const Description = styled.div`
  ${tw`
  font-Inter
  text-[10px]
  sm:text-[16px]
  w-[154px]
  sm:w-[204px]
  mt-[19px]
  sm:mt-[41px]
`}
`
export const Investor = styled.div`
  ${tw`
  flex
  flex-col
  justify-center
  items-center
`}
`

export const CarouselItem = styled.div`
  z-index: 7;
  flex: 0 0 auto;
  margin-right: 25.5px;
  @media (max-width: 640px) {
    margin-right: 16px;
  }
`
export const CardContainer = styled.div`
  height: 360px;
  width: 382px;
  background-color: rgba(72, 111, 253, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  border-radius: 16px;
  transition: width 800ms;
  overflow: hidden;
  @media (max-width: 640px) {
    height: 150px;
    width: 150px;
  }
  &:hover {
    width: 600px;
    flex-direction: row;
    justify-content: center;
    align-items: start;
    gap: 0px 30px;
    @media (max-width: 640px) {
      padding: 0px 2px 0px 16px;
      gap: 0px 11px;
      width: 300px;
    }
  }
`

// CSS Properties Starts

export const CarouserContainerInner = styled(Flex)`
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  width: 85%;
  margin: auto;
  @media (max-width: 640px) {
    width: 100%;
  }
`

export const LeftCarouselButton = styled(CarouselButton)`
  left: 23px;
  display: ${({ hasItemsOnLeft }) => (hasItemsOnLeft ? `block` : `none`)};
  color: white;
  font-size: 50px;
  @media (max-width: 640px) {
    font-size: 20px;
    left: 10px;
  }
`

export const RightCarouselButton = styled(CarouselButton)`
  right: 23px;
  visibility: ${({ hasItemsOnRight }) => (hasItemsOnRight ? `all` : `hidden`)};
  color: white;
  font-size: 50px;
  @media (max-width: 640px) {
    font-size: 20px;
    right: 10px;
  }
`
