import { useRoutes } from "react-router-dom";

import routes from "./routes";
import { LoadingContextProvider } from "./contexts/LoadingContext";

const App = () => {
  const router = useRoutes(routes)

  return (
    <LoadingContextProvider>
      {router}
    </LoadingContextProvider>
  )
}

export default App