import { useContext, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { useRoutes } from "react-router-dom";

import routes from "./routes";
import LoadingContext from "./contexts/LoadingContext";
import Header from "./components/Header";

const App = () => {
  const router = useRoutes(routes)
  const loading = useContext(LoadingContext)

  useEffect(() => {
    loading.setAppLoadingHandler(false)
  }, [])

  return (
    <>
      <Header />
      {router}
      {
        (loading.appLoading || loading.pageLoading) && createPortal(
          <>
            <div className='loader'></div>
          </>,
          document.querySelector('#root')!
        )
      }
    </>
  )
}

export default App