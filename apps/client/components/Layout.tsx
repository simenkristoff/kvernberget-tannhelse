import { ChevronDoubleUpIcon } from '@heroicons/react/outline'
import { SiteSettings } from '@lib/schema'
import { useWindow } from 'context/WindowContext'

import Footer from './Footer'
import Header from './Header'

interface LayoutProps {
  settings: SiteSettings
  children: React.ReactNode
}

export default function Layout({ settings, children }: LayoutProps) {
  const { fixed } = useWindow()

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  return (
    <div>
      <Header settings={settings} />
      <main>{children}</main>

      {fixed && (
        <button
          className="btn btn-primary fixed bottom-2 right-2 z-50 p-2 drop-shadow-lg transition-all duration-300 hover:bottom-4 active:bottom-4"
          onClick={scrollToTop}
        >
          <ChevronDoubleUpIcon className="h-6 w-6" />
        </button>
      )}

      <Footer settings={settings} />
    </div>
  )
}
