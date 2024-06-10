// import Nav from '../Nav/Nav'
import { Link } from 'react-router-dom'
import './Home.css'
import photo from '../../assets/image 53.png'
// import Footer from '../Footer/Footer'

const Home = () => {
  return (
    <div>
      <div className="home_main">
        <img src={photo} alt="" />
        <h1>You got the travel plans, we got the travel vans.</h1>
        <p>Add adventure to your life by joining the #vanlife movement.</p>
        <p>Rent the perfect van to make your perfect road trip.</p>
        <div className="home_btn">
          <Link to="/vans"><p>Find Your Van</p></Link>
        </div>
      </div>
    </div>
  )
}

export default Home