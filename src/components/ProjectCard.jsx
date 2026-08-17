import projectImg from "../assets/image.png"
import { Link } from "react-router"

const ProjectCard = () => {

    const techStack = ["React.js","Css","Gsap","Tailwind","Node.js","Figma"]

  return (
    <div className="main-card-wrapper">
        <div className="card-image">
            <div className="card-main-container">
                <div className="card-tape"></div>
                <div className="card-img-container">
                    <img src={projectImg} alt="" />
                </div>

                <div className="card-img-content">
                    <p>Exhibit a</p>
                    <a href="https://kamigami.onrender.com/" target="_blank" >recovered from www.kamigami.in</a>
                </div>
                
            </div>
        </div>
        <div className="card-content">
            <div className="card-content-top">
                <p>Exhabit a</p>
                <p>Clint · KamiGami.in</p>
                <h2>KamiGami</h2>
                <p>Kami Gami is a modern fashion e-commerce project focused on creating a bold, immersive shopping experience through expressive visuals, clean UI, smooth interactions, and a strong brand identity. I worked on the design and frontend development, translating the concept into a responsive and engaging digital storefront.</p>
                <div className="card-content-tech-stack">
                    {
                        techStack.map((stack,stackIdx)=>{
                            return (
                                <span key={stackIdx}>{stack}</span>
                            )
                        })
                    }
                </div>
                <div className="card-content-open">
                    <p>2026</p>
                    <Link>Open case file</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard
