import styled from 'styled-components'
import tw from 'twin.macro'
import Heading3 from './Typography/Heading3'

const Heading = styled(Heading3)`
  ${tw`
    pl-[24px]
    lg:pl-[128px]
  `}
`
const Underline = styled.div`
  ${tw`
    ml-[24px]
    lg:ml-[128px]
    h-[4px]
    bg-color-primary
    rounded-lg
    mt-2
    mb-9
    lg:mb-20
`}
  width: ${props => `${props.width}px`};
  @media (max-width: 640px) {
    width: ${props => `calc(${props.width}px - 100px)`};
  }
`

const SectionHeading = ({ title, width }) => {
  return (
    <>
      <Heading semibold>{title}</Heading>
      <Underline width={width} />
    </>
  )
}

export default SectionHeading
