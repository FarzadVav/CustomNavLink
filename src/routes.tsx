import { lazy, ReactNode, Suspense } from "react"

const Home = lazy(() => import('./pages/Home.tsx'))
const ExamplePage = lazy(() => import('./pages/ExamplePage.tsx'))

type routeTypes = {
  path: string
  element: ReactNode
}[]

const routes: routeTypes = [
  {
    path: '/',
    element: <Suspense> <Home /> </Suspense>
  },
  {
    path: '/example',
    element: <Suspense> <ExamplePage /> </Suspense>
  }
]

export default routes