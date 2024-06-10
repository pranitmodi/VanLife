import './HostN.css'
import { Link } from 'react-router-dom'

const HostNav = () => {
  return (
    <div className="hostnav_main">
        <Link to="/host/dashboard"><h2>Dashboard</h2></Link>
        <Link to="/host/income"><h2>Income</h2></Link>
        <Link to="/host/reviews"><h2>Reviews</h2></Link>
        <Link to="/host/vans"><h2>Vans</h2></Link>
    </div>
  )
}

export default HostNav