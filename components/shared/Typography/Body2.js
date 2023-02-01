import styled from 'styled-components'
import tw from 'twin.macro'

export default styled.p`
  font-weight: ${props => (props.medium ? '600' : '400')};
  ${tw`
   text-sm
   leading-5
   
   sm:text-base
   sm:leading-6
`}
`
