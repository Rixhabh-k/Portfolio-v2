import Header from "../components/Header"
import HeroSection from "../components/HeroSection"
import MiddleHeader from "../components/MiddleHeader"
import NavBar from "../components/NavBar"
import ProjectsSection from "../components/ProjectsSection"
import TopHeader from "../components/TopHeader"

const MainPage = () => {
  return (
    <div id="main">
      <TopHeader/>
      <MiddleHeader/>
      <Header/>
      <NavBar/>
      <HeroSection/>
      <ProjectsSection/>
    </div>
  )
}

export default MainPage
