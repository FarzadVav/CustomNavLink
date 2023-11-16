import { createContext, ReactNode, useState } from "react";

type LoadingContextTypes = {
  appLoading: boolean
  pageLoading: boolean
  setAppLoadingHandler: (status: boolean) => void
  setPageLoadingHandler: (status: boolean) => void
}

const LoadingContext = createContext<LoadingContextTypes>({
  appLoading: true,
  pageLoading: false,
  setAppLoadingHandler: () => { },
  setPageLoadingHandler: () => { }
})

type LoadingContextProviderProps = {
  children: ReactNode
}

export const LoadingContextProvider = ({ children }: LoadingContextProviderProps) => {
  const [appLoading, setAppLoading] = useState<boolean>(true)
  const [pageLoading, setPageLoading] = useState<boolean>(false)

  const setAppLoadingHandler = (status: boolean) => setAppLoading(status)

  const setPageLoadingHandler = (status: boolean) => setPageLoading(status)

  return (
    <LoadingContext.Provider value={{
      appLoading,
      pageLoading,
      setAppLoadingHandler,
      setPageLoadingHandler
    }}>
      {children}
    </LoadingContext.Provider>
  )
}

export default LoadingContext