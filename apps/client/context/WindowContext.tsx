import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect
} from 'react'

const breakpoints: { [key: string]: number } = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536
}

interface WindowContextProps {
  fixed: boolean
  isMobile: boolean
}

const initial: WindowContextProps = {
  fixed: false,
  isMobile: false
}

const WindowContext = createContext<WindowContextProps>(initial)

export function WindowProvider({ children }: { children: ReactNode }) {
  const [isMobile, setIsMobile] = useState<boolean>(false)
  const [fixed, setFixed] = useState<boolean>(false)

  const checkScrollConstraints = () => {
    if (!window) return
    setFixed(window.scrollY > 200)
  }

  const checkWidthConstraints = () => {
    if (!window) return

    if (window.innerWidth > breakpoints.md) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }

  useEffect(() => {
    checkWidthConstraints()
    window.addEventListener('resize', checkWidthConstraints)
    window.addEventListener('scroll', checkScrollConstraints)

    return () => {
      window.removeEventListener('resize', checkWidthConstraints)
      window.removeEventListener('scroll', checkScrollConstraints)
    }
  }, [])

  return (
    <WindowContext.Provider
      value={{
        fixed,
        isMobile
      }}
    >
      {children}
    </WindowContext.Provider>
  )
}

export function useWindow() {
  return useContext(WindowContext)
}
