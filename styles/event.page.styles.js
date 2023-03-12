import styled from '@emotion/styled'
import tw from 'twin.macro'

export const Container = styled.div`
  ${tw`
    w-full
    h-auto
    overflow-x-hidden
    overflow-y-auto
    sm:w-[85%]
    flex
    flex-col
    gap-y-[50px]
    items-start
    justify-center
    min-h-screen
    mx-auto
    mb-[10%]
    sm:mt-[130px]
    mt-[120px]
  `}
  height: fit-content;
`
