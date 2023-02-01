import styled from 'styled-components'
import tw from 'twin.macro'

export default styled.h2`
  font-weight: ${props => (props.semibold ? '600' : '400')};
  ${tw` 
   text-2xl
   leading-7
   sm:text-5xl
   sm:leading-11.5
`}
`
