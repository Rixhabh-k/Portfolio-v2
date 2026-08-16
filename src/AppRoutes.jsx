import { BrowserRouter, Route, Routes } from "react-router"
import MainPage from "./pages/MainPage"



const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainPage/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
