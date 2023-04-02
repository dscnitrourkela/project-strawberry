import styled from 'styled-components'
import tw from 'twin.macro'

export const FooterContainer = styled.div`
  ${tw`
  flex
  flex-col
  justify-around
  items-center
  lg:items-start
  lg:flex-row
  pb-[60px]
  // pl-[122px]
  // pr-[120px]
  gap-x-[5.757638888888889vw]
  gap-y-[40px]
`}
`

export const Column = styled.div`
  ${tw`
  flex
  flex-col
  items-center
  lg:items-start
  min-w-[300px]
`}
`

export const LogoColumn = styled.div`
  ${tw`
  flex
  flex-col
  items-center
  lg:items-start
`}
`

export const MiddleColumn = styled.div`
  ${tw`
  justify-evenly
  items-center
  my-auto
  flex
  h-full
  gap-x-[3vw]
`}
`
export const CentralBar = styled.div`
  ${tw`
  lg:h-[60px]
  h-[40px]
  rounded-lg
  bg-white
  px-[1px]
`}
`

export const Numbers = styled.div`
  ${tw`
  flex flex-col
`}
`

export const Logo = styled.img`
  ${tw`
  h-[39px]
`}
`

export const Description = styled.div`
  ${tw`
  w-[250px]
  lg:w-[21.52777777777778vw]
  text-center
  lg:text-start
  text-[18px]
  my-[24px]
`}
`

export const SmLogos = styled.div`
  ${tw`
  flex
`}
`

export const SmLogo = styled.div`
  ${tw`
  cursor-pointer
  text-color-primary
  text-lg
  mr-[22px]
`}
`
export const CentralImgNIT = styled.img`
  ${tw`
  xl:w-[90px]
  w-[70px]
`}
`

export const CentralImgEcell = styled.img`
  ${tw`
  xl:w-[180px]
  w-[140px]
`}
`

export const ContactHeading = styled.div`
  ${tw`
  text-color-primary
  font-semibold
  text-[20px]
  mb-[15px]
  mt-[0px]
  lg:mt-0
  lg:mb-[20px]
`}
`

export const ContactContainer = styled.div`
  ${tw`
  flex
  justify-center
  items-center
  mb-[18px]
`}
`

export const ContactLogo = styled.div`
  ${tw`
  text-color-primary
  text-[20px]
  mr-[6px]
`}
`

export const FooterItems = styled.div`
  width: full;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: justify;
`

export const MadeBy = styled.div`
  padding-left: 36px;
  padding-right: 30px;
  padding-bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: justify;
  padding-top: 5px;
`

export const Ruler = styled.hr`
  width: 85%;
  height: 10px;
  color: #69676;
`
