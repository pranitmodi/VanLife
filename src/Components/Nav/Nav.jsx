import {Link} from 'react-router-dom'
import './Nav.css'

const Nav = () => {
  return (
    <div className="nav_main">
        <Link to="/"><div className="logo"><h1>#VANLIFE</h1></div></Link>
        <div className="links">
          <Link to="/host"><h3>Host</h3></Link>
          <Link to="/about"><h3>About</h3></Link>
          <Link to="/vans"><h3>Vans</h3></Link>
        </div>
    </div>
  )
}

export default Nav