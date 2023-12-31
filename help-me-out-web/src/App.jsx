import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import LandingPage from "./pages/LandingPage/LandingPage"
import VideoRepository from "./pages/VideoRepositoryPage/VideoRepository"
import SingleVideoView from "./pages/singleVideoView/SingleVideoView"
import Login from "./pages/LoginPage/Login"
import VideoReadyPage from "./pages/VideoReadyPage/VideoReadyPage"
import VideoSent from "./Components/VideoReadyPage - components/VideoSent"


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<LandingPage />} />
      <Route path="/video" element={<VideoRepository />} />
      <Route path="/singlevideo" element={<SingleVideoView />} />
      <Route path="/login" element={<Login />} />
      <Route path="/ready" element={<VideoReadyPage />} />
      <Route path="/sent" element={<VideoSent />} />
      
    </Route>
  )
)

const App = () => {
  return(
    <RouterProvider router={router} />
  )
  
}

export default App