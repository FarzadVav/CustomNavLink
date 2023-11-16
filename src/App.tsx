import { useContext, useEffect } from 'react'
import { useRoutes } from "react-router-dom";

import routes from "./routes";
import LoadingContext from "./contexts/LoadingContext";
import Header from "./components/ui/Header";
import Loader from './components/features/Loader';

const App = () => {
  const router = useRoutes(routes)
  const loading = useContext(LoadingContext)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(() => {
        // codes...
      })
      .catch(() => {
        // codes...
      })
      .finally(() => loading.setAppLoadingHandler(false))
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