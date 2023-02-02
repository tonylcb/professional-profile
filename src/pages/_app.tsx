import AsideMenu from '@/components/Header/aside-menu'
import '@/styles/globals.scss'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <AsideMenu />
    <Component {...pageProps} />
  </>
}
