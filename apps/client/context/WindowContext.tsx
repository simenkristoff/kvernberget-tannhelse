import { throttle } from 'lodash'
import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
  useRef
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
  setRef: (ref: HTMLElement) => void
}

const initial: WindowContextProps = {
  fixed: false,
  isMobile: false,
  setRef: () => null
}

const WindowContext = createContext<WindowContextProps>(initial)

export function WindowProvider({ children }: { children: ReactNode }) {
  const [isMobile, setIsMobile] = useState<boolean>(false)
  const [fixed, setFixed] = useState<boolean>(false)
  const [headerHeight, setHeaderHeight] = useState<number>(0)
  const ctxRef = useRef<HTMLElement>()

  const setRef = (ref: HTMLElement) => {
    ctxRef.current = ref
    setHeaderHeight(ctxRef.current?.clientHeight)
  }

  const onScroll = () => {
    if (!window) return
    setFixed(window.scrollY > window.innerHeight - headerHeight)
  }

  const onResize = () => {
    if (!window) return

    if (window.innerWidth > breakpoints.md) {
      setIsMobile(false)
    } else {
      setIsMobile(true)
    }
    if (ctxRef.current) {
      setHeaderHeight(ctxRef.current.clientHeight)
    }
  }

  useEffect(() => {
    onResize()

    const scrollThrottler = throttle(onScroll, 300)

    window.addEventListener('resize', onResize)
    window.addEventListener('scroll', scrollThrottler)
    return () => {
      window.removeEventListener('resize', onResize)
      window.removeEventListener('scroll', scrollThrottler)
    }
  }, [])

  return (
    <WindowContext.Provider
      value={{
        fixed,
        isMobile,
        setRef
      }}
    >
      {children}
    </WindowContext.Provider>
  )
}

export function useWindow() {
  return useContext(WindowContext)
}
