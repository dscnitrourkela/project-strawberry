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
  pl-[122px]
  pr-[120px]
  gap-x-[5.757638888888889vw]
`}
`

export const Column = styled.div`
  ${tw`
  flex
  flex-col
  items-center
  lg:items-start
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
  hidden
  justify-start
  items-start
  lg:flex
  gap-x-[5.757638888888889vw]
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
export const ColumnHeading = styled.div`
  ${tw`
  text-color-primary
  font-semibold
  text-[20px]
  mb-[40px]
`}
`

export const ContactHeading = styled.div`
  ${tw`
  text-color-primary
  font-semibold
  text-[20px]
  mb-[5px]
  mt-[40px]
  lg:mt-0
  lg:mb-[42px]
`}
`

export const FooterAnchor = styled.a`
  ${tw`
  cursor-pointer
  mb-[18px]
  whitespace-nowrap	
`}
`
export const ContactContainer = styled.div`
  ${tw`
  flex
  justify-center
  items-start
  mb-[22px]
`}
`

export const ContactLogo = styled.div`
  ${tw`
  text-color-primary
  text-[20px]
  mr-[6px]
`}
`
