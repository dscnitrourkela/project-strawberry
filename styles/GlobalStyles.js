import { Global, css } from '@emotion/react'
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro'

const customStyles = css({
  body: {
    WebkitTapHighlightColor: 'transparent',
    ...tw`antialiased bg-bg-primary text-[#FFFFFF]`,
    '&::-webkit-scrollbar': {
      width: '12px',
      // height: '24px',
    },
    '&::-webkit-scrollbar-track': {
      background: theme`colors.gray.900`,
    },
    '&::-webkit-scrollbar-thumb': {
      background: '#486ffd',
      borderRadius: '10px',
      border: '4px solid #486ffd',
    },
  },
})

const GlobalStyles = () => (
  <>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"
      rel="stylesheet"
    />
    <BaseStyles />
    <Global styles={customStyles} />
  </>
)

export default GlobalStyles
