import axios from 'axios'
import { SWRConfig } from 'swr'
import { CssBaseline } from '@mui/material'

import theme from '../styles/theme'
import { ThemeProvider } from '@emotion/react'

const fetcher = (...args) => axios.get(...args).then((res) => res.data)

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <SWRConfig value={{ fetcher }}>
          <Component {...pageProps} />
        </SWRConfig>
      </CssBaseline>
    </ThemeProvider>
  )
}

export default MyApp
