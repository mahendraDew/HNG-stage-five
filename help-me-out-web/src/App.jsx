import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import LandingPage from "./pages/LandingPage/LandingPage"
import VideoRepository from "./pages/VideoRepositoryPage/VideoRepository"


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {/* <Route path="/" element={<LandingPage />} /> */}
      <Route path="/" element={<VideoRepository />} />
      
    </Route>
  )
)

const App = () => {
  return(
    <RouterProvider router={router} />
  )
  
}

export default App