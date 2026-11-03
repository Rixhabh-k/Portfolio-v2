import { useEffect } from "react"
import { BrowserRouter, Route, Routes, useLocation } from "react-router"
import MainPage from "./pages/MainPage"
import ProjectDetailPage from "./pages/ProjectDetailPage"

// Scroll to the #hash target if there is one, otherwise to the top on every navigation.
const ScrollManager = () => {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    const target = hash && document.querySelector(hash)

    if (target) {
      target.scrollIntoView()
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])

  return null
}

const AppRoutes = () => {
  return (
    <BrowserRouter>
        <ScrollManager />
        <Routes>
            <Route path="/" element={<MainPage/>} />
            <Route path="/work/:slug" element={<ProjectDetailPage/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
