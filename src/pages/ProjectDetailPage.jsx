import { Link, useParams } from "react-router"
import Header from "../components/Header"
import MiddleHeader from "../components/MiddleHeader"
import ProjectDetail from "../components/ProjectDetail"
import TopHeader from "../components/TopHeader"
import { getProjectBySlug } from "../data/projects"
import "../styles/case-detail.css"

const ProjectDetailPage = () => {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)

  return (
    <div id="main">
      <TopHeader/>
      <MiddleHeader/>
      <Header/>

      {project ? (
        <ProjectDetail {...project} />
      ) : (
        <div className="case-missing">
          <p>Case file not found</p>
          <h1>This record has been redacted or never existed.</h1>
          <Link to="/#work">← Back to The Evidence</Link>
        </div>
      )}
    </div>
  )
}

export default ProjectDetailPage
