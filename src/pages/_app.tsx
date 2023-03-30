import type { AppProps } from 'next/app'
import '../styles/globals.scss'
import { useEffect } from 'react'

export default function App({ Component, pageProps }: AppProps) {

  /** Removing The Context Menu! */
  const hcontext = (UEAH: { preventDefault: () => void }) => {
    UEAH.preventDefault()
  }

  useEffect(() => {
    document.addEventListener('contextmenu', hcontext)
    return function cleanme() {
      document.removeEventListener('contextmenu', hcontext)
    }
  })

  return (
    <>
      <Component {...pageProps} />
    </>
  )
}
