import Header from "../components/Header"
import HeroSection from "../components/HeroSection"
import MiddleHeader from "../components/MiddleHeader"
import NavBar from "../components/NavBar"
import TopHeader from "../components/TopHeader"

const MainPage = () => {
  return (
    <div id="main">
      <TopHeader/>
      <MiddleHeader/>
      <Header/>
      <NavBar/>
      <HeroSection/>
    </div>
  )
}

export default MainPage
