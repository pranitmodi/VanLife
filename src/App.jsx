import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Vans from './Components/Vans/Vans';
import VanDetail from './Components/VanDetail/VanDetail';
import LayoutMain from './Components/Layout Main/LayoutMain';
import HostLayout from './Components/Host/HostLayout';
import HostDashboard from './Components/Host/Dashboard/HostDashboard'
import HostReviews from './Components/Host/Reviews/HostReviews'
import HostIncome from './Components/Host/Income/HostIncome'
import HostVans from './Components/Host/Vans/HostVans';
import HostVanEach from './Components/Host/Vans/HostVanEach';
import Details from './Components/Host/Vans/NewNav/Details';
import Pricing from './Components/Host/Vans/NewNav/Pricing';
import Photos from './Components/Host/Vans/NewNav/Photos';
import Signin from './Components/Sign In/Signin';


function App() {

  return (
    <Router>
      <Routes>
        <Route element={<LayoutMain/>}>
          <Route path='/van/:id' element={<VanDetail/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/vans' element={<Vans/>}/>
          <Route path='/signIn' element={<Signin/>}/>
          <Route path='/host' element={<HostLayout/>}>
            <Route path='/host' element={<HostDashboard/>}/>
            <Route path='/host/dashboard' element={<HostDashboard/>}/>
            <Route path='/host/reviews' element={<HostReviews/>}/>
            <Route path='/host/income' element={<HostIncome/>}/>
            <Route path='/host/vans' element={<HostVans/>}/>
            <Route path='/host/vans/:id' element={<HostVanEach/>}>
              <Route path='/host/vans/:id' element={<Details/>} />
              <Route path='/host/vans/:id/details' element={<Details/>}/>
              <Route path='/host/vans/:id/price' element={<Pricing/>} />
              <Route path='/host/vans/:id/photos' element={<Photos/>} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
