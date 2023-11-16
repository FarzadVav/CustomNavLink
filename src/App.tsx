import { useContext, useEffect } from 'react'
import { useRoutes } from "react-router-dom";

import routes from "./routes";
import LoadingContext from "./contexts/LoadingContext";
import Loader from './components/Loader';
import Header from "./components/Header";

const App = () => {
  const router = useRoutes(routes)
  const loading = useContext(LoadingContext)

  useEffect(() => {
    loading.setAppLoadingHandler(false)
  }, [])

  return (
    <>
      <Loader />
      <Header />
      {router}
    </>
  )
}

export default App