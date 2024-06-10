// import Nav from '../Nav/Nav'
// import Footer from '../Footer/Footer'
import './Vans.css'
import { useEffect, useState } from 'react'
import Van from './Van'

const Vans = () => {

  const [vans, setVans] = useState([])

  useEffect(() => {
    fetch("/api/vans")
      .then(res => res.json())
      .then(data => setVans(data.vans))
      .catch(err => console.error(err));
  }, []);

  const allVans = () =>
    {
      const collect = []
      const colorBg = ["simple","luxury","rugged"]
      vans.map(ele => {
          if(selectedDiv != 0)
          {
            if(ele.type == colorBg[selectedDiv-1])
            {
              collect.push(<Van id={ele.id} key={ele.id} img={ele.imageUrl} title={ele.name} price={ele.price} type={ele.type}/>)
            }
          }
          else
          {
            collect.push(<Van id={ele.id} key={ele.id} img={ele.imageUrl} title={ele.name} price={ele.price} type={ele.type}/>)
          }
      })
      return collect
    }

    const [selectedDiv, setselectedDiv] = useState(0)

  return (
    <div className="vans_main">
        <div className="vans_filter">
          <h1>Explore our van options</h1>
          <div className="filters">
            <h3 className='simple' style={selectedDiv == 1 ? {backgroundColor: "#E17654", color: "#FFEAD0"} : {}} onClick={()=>{setselectedDiv(1)}}>Simple</h3>
            <h3 className='luxury' style={selectedDiv == 2 ? {backgroundColor: "#161616", color: "#FFEAD0"} : {}} onClick={()=>{setselectedDiv(2)}}>Luxury</h3>
            <h3 className='rugged' style={selectedDiv == 3 ? {backgroundColor: "#115E59", color: "#FFEAD0"} : {}} onClick={()=>{setselectedDiv(3)}}>Rugged</h3>
            <p onClick={()=>{setselectedDiv(0)}}>Clear filters</p>
          </div>
        </div>
        <div className="all_vans">
          {allVans()}
        </div>
    </div>
  )
}

export default Vans