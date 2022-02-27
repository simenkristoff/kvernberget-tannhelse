import { HiOutlineChevronDoubleUp } from 'react-icons/hi'
import { SiteSettings } from '@lib/schema'
import { useWindow } from 'context/WindowContext'

import Button from './Button'
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
    <div className="relative h-screen w-screen bg-white text-gray-700 dark:text-gray-100">
      <Header settings={settings} />
      <main className="wrapper-full dark:bg-gray-900">{children}</main>

      {fixed && (
        <Button
          onClick={() => scrollToTop()}
          className="group fixed bottom-2 right-2 z-50 p-2 transition-all duration-300 hover:bottom-4 active:bottom-4"
        >
          <HiOutlineChevronDoubleUp className="h-6 w-6" />
        </Button>
      )}

      <Footer settings={settings} />
    </div>
  )
}
