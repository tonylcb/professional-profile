// import AsideMenu from '@/components/Header/aside-menu'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="stylesheet" type="text/css" href="nprogress.css" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500;700&display=swap" rel="stylesheet" />
      </Head>
      <body>
        {/* <AsideMenu /> */}
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
