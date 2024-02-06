import { useRoutes } from 'react-router-dom'
import { lazy } from 'react'

const Home = lazy(() => import('../pages/Home/Home'))

import Layout from '../layout/Layout'

function Router() {
  const element = useRoutes([
    {
      element: <Layout />,
      children: [
        { path: '/', element: <Home /> },
      ],
    },
  ])
  return element
}

export default Router