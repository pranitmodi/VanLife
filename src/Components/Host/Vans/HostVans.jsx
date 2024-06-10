import './HostV.css'
import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

const HostVans = () => {

  const [data, setdata] = useState()

  const listele = (i,img, name, price) => {
    return(
      <Link to={`/host/vans/${i}`}>
        <div key={i} className="van_ele">
          <div className="van_left">
            <img src={img} alt="" />
            <div className="van_text">
              <h3>{name}</h3>
              <p>${price}/day</p>
            </div>
          </div>
        </div>
      </Link>
    )
  }

  const allvans = () => {
    const allv = []
      for(let i=1; i<=3; i++)
        {
          allv.push(listele(i,data[i].imageUrl, data[i].name, data[i].price))
        }
      return allv
  }

  useEffect(() => {
    fetch("/api/vans")
    .then(res => res.json())
    .then(dat => setdata(dat.vans))
  },[])

  return (
    <div className="hostvans_main">
      <h1>Your listed HostVans</h1>
      <div className="allvans">
        {data ? allvans() : "Loading..."}
      </div>
    </div>
  )
}

export default HostVans