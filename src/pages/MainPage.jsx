import CareerLedger from "../components/CareerLedger"
import ContactSection from "../components/ContactSection"
import Footer from "../components/Footer"
import Forensics from "../components/Forensics"
import Header from "../components/Header"
import HeroSection from "../components/HeroSection"
import MiddleHeader from "../components/MiddleHeader"
import NavBar from "../components/NavBar"
import ProjectsSection from "../components/ProjectsSection"
import TopHeader from "../components/TopHeader"
import WantedIntro from "../components/WantedIntro"

const MainPage = () => {
  return (
    <div id="main">
      <WantedIntro/>
      <TopHeader/>
      <MiddleHeader/>
      <Header/>
      <NavBar/>
      <HeroSection/>
      <ProjectsSection/>
      <Forensics/>
      <CareerLedger/>
      <ContactSection/>
      <Footer/>
    </div>
  )
}

export default MainPage
