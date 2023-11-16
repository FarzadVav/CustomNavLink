import { useRoutes } from "react-router-dom";

import routes from "./routes";
import { LoadingContextProvider } from "./contexts/LoadingContext";
import Header from "./components/Header";

const App = () => {
  const router = useRoutes(routes)

  return (
    <LoadingContextProvider>
      <Header />
      {router}
    </LoadingContextProvider>
  )
}

export default App