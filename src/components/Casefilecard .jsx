import projectImg from "../assets/image.png"
import { Link } from "react-router"

const CaseFileCard = () => {

    const techStack = ["React.js","Css","Gsap","Tailwind","Node.js","Figma"]

  return (
    <div className="casefile-card">
        <p className="casefile-label">Exhibit A</p>
        <p className="casefile-client">KamiGami · KamiGami.in</p>
        <h2 className="casefile-title">KamiGami</h2>

        <div className="casefile-media">
            <div className="casefile-tape"></div>
            <div className="casefile-media-frame">
                <img src={projectImg} alt="" />
            </div>
            <div className="casefile-media-tags">
                <span className="casefile-exhibit-tag">Exhibit A</span>
                <span className="casefile-recovered">recovered from kamigami.in</span>
            </div>
        </div>

        <p className="casefile-description">
            Kami Gami is a modern fashion e-commerce project focused on creating a bold, immersive shopping experience through expressive visuals, clean UI, smooth interactions, and a strong brand identity. I worked on the design and frontend development, translating the concept into a responsive and engaging digital storefront.
        </p>

        <div className="casefile-tech-stack">
            {
                techStack.map((stack,stackIdx)=>{
                    return (
                        <span key={stackIdx}>{stack}</span>
                    )
                })
            }
        </div>

        <div className="casefile-footer">
            <p className="casefile-year">2026</p>
            <Link className="casefile-open-link">Open case file</Link>
        </div>
    </div>
  )
}

export default CaseFileCard