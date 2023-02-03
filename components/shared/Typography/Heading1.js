import styled from 'styled-components'
import tw from 'twin.macro'

export default styled.h1`
  font-weight: ${props => (props.semibold ? '600' : '400')};
  ${tw`
   text-3.5xl
   leading-9
   sm:text-6xl
   sm:leading-12
   font-Inter

`}
`
