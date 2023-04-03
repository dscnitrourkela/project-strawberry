import { cache } from '@emotion/css'
import { CacheProvider } from '@emotion/react'
import GlobalStyles from './../styles/GlobalStyles'
import Head from 'next/head'

const App = ({ Component, pageProps }) => (
  <CacheProvider value={cache}>
    <Head>
      <title>NES 2023</title>
      <link
        rel="shortcut icon"
        href="https://res.cloudinary.com/dmofs5r4h/image/upload/v1675234629/nes_oxnksn.png"
      />
    </Head>
    <GlobalStyles />
    <Component {...pageProps} />
  </CacheProvider>
)

export default App
