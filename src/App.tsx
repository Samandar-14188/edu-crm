import {createBrowserRouter, RouterProvider} from "react-router-dom"
import DashboardLayoutBasic from "./page/admin"
import SlotPropsSignIn from "./page/auth"
export default function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <DashboardLayoutBasic />
    },
    {
      path:'/authentication/sign-in',
      element:<SlotPropsSignIn />
    }
  ])
  return (
    <RouterProvider router={routes} />
  )
}
