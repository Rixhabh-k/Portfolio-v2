import {Link} from 'react-router-dom'
import { GrMenu } from "react-icons/gr";

const NavBar = () => {
  return (
    <div className="navbar" >
        <div className="nav-content">
            <div className="logo">
            <h1>Rishabh Kharwar</h1>
        </div>
        <div className="nav-links">
            <Link>Work</Link>
            <Link>Stack</Link>
            <Link>Contact</Link>
            <Link className='hire-him'>Hire Him</Link>
        </div>
        <div className="menu">
            <GrMenu />
        </div>
        </div>
    </div>
  )
}

export default NavBar
