import {createBrowserRouter, RouterProvider} from "react-router-dom"
import DashboardLayoutBasic from "./page/admin"
import SlotPropsSignIn from "./page/auth"
import Integrations from "./components/integrations"
import Reports from "./components/reports"
import Communication from "./components/communication"
import Intelligence from "./components/intelligence"
import Interesting from "./components/interesting"
import Poem from "./components/poem"
import QuizApp from "./components/Viktorina"
import Profil from "./components/profil"
import Support from "./components/toSupport"


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
      path:'/quiz',
      element:<QuizApp />
    },
    {
      path:'/communication',
      element:<Communication />
    },
    {
      path:'/poem',
      element:<Poem />
    },
    {
      path:'/interesting',
      element:<Interesting />
    },
    {
      path:'/intelligence',
      element:<Intelligence />
    },
    {
      path:'/integrations',
      element:<Integrations />
    },
    {
      path:'/reports',
      element:<Reports />
    },
    {
      path:'/profil',
      element:<Profil />
    },
    {
      path:'/support',
      element:<Support />
    },
   
    
  ])
  return (
    <RouterProvider router={routes} />
  )
}
