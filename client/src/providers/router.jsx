import { lazy } from 'react';
import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import App from '@/App';
import Layouts from '@/components/layouts';
import ROUTER_PATHS from '@/constants/route-paths';
import { LAYOUTS } from '@/constants/layouts';
const Home = lazy(() => import('@/pages/home'));
const Reservation = lazy(() => import('@/pages/reservation'));

export const routes = [
  {
    path: ROUTER_PATHS.HOME,
    element: <Home />,
  },
  {
    path: ROUTER_PATHS.RESERVATION,
    element: <Reservation />,
  },
]
const renderRoutes = () => {
  const Layout = Layouts[LAYOUTS.BASE.key];
  return (<Route path="/" element={<Layout />}>
    {routes.map(({ path, element}) => (<Route
      key={path}
      path={path}
      element={element}
    />))}
  </Route>)
}
const createRoutes = () => createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      {renderRoutes()}
      <Route path="*" element={<h1>Not Found</h1>}/>
    </Route>
  )
);
export const Router = () => {
  return (
    <RouterProvider router={createRoutes()}/>
  )
}