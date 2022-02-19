import '../styles/globals.css'
import type { AppContext, AppInitialProps, AppProps } from 'next/app'
import React from 'react'
import { getSiteSettings, GetSiteSettingsQueryResult } from '@lib/queries/getSettings'

import { SettingsProvider } from 'context/SettingsContext'
import { WindowProvider } from 'context/WindowContext'

export const SettingsContext = React.createContext({})

interface SettingsProps {
  siteSettings: GetSiteSettingsQueryResult
}

type InitialAppProps = AppInitialProps & SettingsProps

function App ({ Component, pageProps, siteSettings }: AppProps & SettingsProps) {
  return (
    <WindowProvider>
    <SettingsProvider value={siteSettings[0]}>
      <Component {...pageProps} />
    </SettingsProvider>
    </WindowProvider>
  )
}

App.getInitialProps = async ({ Component, ctx }: AppContext): Promise<InitialAppProps> => {
  const siteSettings = await getSiteSettings()
  let pageProps = {}
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }
  return {
    pageProps,
    siteSettings
  }
}

export default App
