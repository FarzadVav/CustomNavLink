import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { LoadingContextProvider } from './contexts/LoadingContext.tsx'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <LoadingContextProvider>
      <App />
    </LoadingContextProvider>
  </BrowserRouter>
)
