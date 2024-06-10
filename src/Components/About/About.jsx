// import Nav from '../Nav/Nav'
// import Footer from '../Footer/Footer'
import bgImg from '../../assets/image 54.png'
import { Link } from 'react-router-dom'
import './About.css'

const About = () => {
  return (
      <div className="about_main">
            <img src={bgImg} className="about_img" />
            <div className="about_text">
                <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
                <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)</p>
                <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
            </div>
            <div className="about_cta">
                <h2>Your destination is waiting.<br />Your van is ready.</h2>
                <Link className="link-button" to="/vans"><p>Explore our vans</p></Link>
            </div>
      </div>
  )
}

export default About