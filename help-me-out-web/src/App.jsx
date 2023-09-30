import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import LandingPage from "./pages/LandingPage/LandingPage"
import Features from "./Components/LandingPage - components/Features"
import Header from "./Components/Header/Header"
import Works from "./Components/LandingPage - components/Works"
import Footer from "./Components/Footer/Footer"
import Hero from "./Components/LandingPage - components/Hero"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<LandingPage />} />
      
    </Route>
  )
)

const App = () => {
  return(
    <RouterProvider router={router} />
  )
  
}

export default App