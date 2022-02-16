import { SiteSettings } from '@lib/schema'
import { omit } from 'lodash'
import { createContext, useContext, ReactNode } from 'react'

type SiteSettingsContextType = Omit<SiteSettings, '_id' | '_rev' | '_type' | '_updatedAt' | '_createdAt'>

const initial: SiteSettingsContextType = {
  siteTitle: '',
  siteDescription: '',
  address: '',
  email: '',
  phone: '',
  openingHours: []
}

const SettingsContext = createContext<SiteSettingsContextType>(initial)

export function SettingsProvider ({ children, value }: {children: ReactNode, value: SiteSettings}) {
  const ctxValue = omit(value, ['_id', '_rev', '_type', '_updatedAt', '_createdAt'])

  return (
        <SettingsContext.Provider value={ctxValue}>
            {children}
        </SettingsContext.Provider>
  )
}

export function useSettings () {
  return useContext(SettingsContext)
}
