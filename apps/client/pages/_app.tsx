import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react'
import { WindowProvider } from 'context/WindowContext'

export function reportWebVitals(metric: any) {
  // { id, name, label, value } = metric
  // // Use `window.gtag` if you initialized Google Analytics as this example:
  // // https://github.com/vercel/next.js/blob/canary/examples/with-google-analytics/pages/_app.js
  // window.gtag('event', name, {
  //   event_category:
  //     label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
  //   value: Math.round(name === 'CLS' ? value * 1000 : value), // values must be integers
  //   event_label: id, // id unique to current page load
  //   non_interaction: true // avoids affecting bounce rate.
  // })
}

function App({ Component, pageProps }: AppProps) {
  return (
    <WindowProvider>
      <Component {...pageProps} />
    </WindowProvider>
  )
}

export default App
