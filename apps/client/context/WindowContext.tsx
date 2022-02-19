import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect
} from 'react'

interface WindowContextProps {
  fixed: boolean;
}

const initial: WindowContextProps = {
  fixed: false
}

const WindowContext = createContext<WindowContextProps>(initial)

export function WindowProvider ({ children }: { children: ReactNode }) {
  const [fixed, setFixed] = useState<boolean>(false)

  const checkScrollConstraints = () => {
    if (!window) return
    setFixed(window.scrollY > 0)
  }

  useEffect(() => {
    window.addEventListener('scroll', checkScrollConstraints)

    return () => {
      window.removeEventListener('scroll', checkScrollConstraints)
    }
  }, [])

  return (
    <WindowContext.Provider
      value={{
        fixed
      }}
    >
      {children}
    </WindowContext.Provider>
  )
}

export function useWindow () {
  return useContext(WindowContext)
}
