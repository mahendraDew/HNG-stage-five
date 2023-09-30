import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import LandingPage from "./pages/LandingPage/LandingPage"
import VideoRepository from "./pages/VideoRepositoryPage/VideoRepository"
import SingleVideoView from "./pages/singleVideoView/SingleVideoView"


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {/* <Route path="/" element={<LandingPage />} /> */}
      <Route path="/video" element={<VideoRepository />} />
      <Route path="/" element={<SingleVideoView />} />
      
    </Route>
  )
)

const App = () => {
  return(
    <RouterProvider router={router} />
  )
  
}

export default App