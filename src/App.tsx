import {createBrowserRouter, RouterProvider} from "react-router-dom"
import DashboardLayoutBasic from "./page/admin"
import SlotPropsSignIn from "./page/auth"
import Dashboard from "./components/dashboarding"
import Orders from "./components/orders"
import Integrations from "./components/integrations"
import Reports from "./components/reports"
export default function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <DashboardLayoutBasic />
    },
    {
      path:'/authentication/sign-in',
      element:<SlotPropsSignIn />
    },
    {
      path:'/dashboard',
      element:<Dashboard />
    },
    {
      path:'/orders',
      element:<Orders />
    },
    {
      path:'/integrations',
      element:<Integrations />
    },
    {
      path:'/reports',
      element:<Reports />
    },
   
    
  ])
  return (
    <RouterProvider router={routes} />
  )
}
