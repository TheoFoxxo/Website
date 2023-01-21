import type { AppProps } from 'next/app'
import { Layout } from "../components/Layout/Layout"

import '../styles/globals.scss'
import '../styles/Home.scss'

export default function App({ Component, pageProps }: AppProps) {
  return (
  <>
  <Component {...pageProps} />
  <Layout/>
  </>
  )
}
