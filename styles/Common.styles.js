import styled from '@emotion/styled'
import tw from 'twin.macro'

export const Container = styled.div`
  ${tw`
    w-full
    h-auto
    overflow-x-hidden
    overflow-y-auto
    flex
    flex-col
    items-start
    justify-center
    min-h-screen
  `}
  height: fit-content;
  margin: 15% auto 10%;
`
