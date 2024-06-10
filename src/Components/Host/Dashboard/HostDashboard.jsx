import { useEffect, useState } from "react"
import {Link} from 'react-router-dom'
import "./HostD.css"

const HostDashboard = () => {

  const listele = (i,img, name, price) => {
    return(
      <div key={i} className="van_ele">
        <div className="van_left">
          <img src={img} alt="" />
          <div className="van_text">
            <h3>{name}</h3>
            <p>${price}/day</p>
          </div>
        </div>
        <Link to={`/host/vans/${i+1}/details`}><p><span>Edit</span></p></Link>
      </div>
    )
  }
  
  const [data, setdata] = useState()
  
  useEffect(() => {
    fetch("/api/vans")
    .then(res => res.json())
    .then(dat => setdata(dat.vans))
  },[])

  // console.log(data)
  
  const allvans = () => {
    const allv = []
      for(let i=1; i<=3; i++)
        {
          console.log(data[i])
          allv.push(listele(i,data[i].imageUrl, data[i].name, data[i].price))
        }
      return allv
  }

  return (
    <div className="hostdashboard_main">
      <div className="host_income">
        <h1>Welcome!</h1>
        <div className="income_details">
          <p>Income last <span>30 days</span></p>
          <Link to="/host/income"><p><span>Details</span></p></Link>
        </div>
        <h1 className="price">${7399}</h1>
      </div>
      <div className="host_review">
        <div className="left">
          <h3>Review score</h3>
          <h4>⭐3.51/5</h4>
        </div>
        <Link to="/host/reviews"><p>Details</p></Link>
      </div>
      <div className="host_vans">
        <div className="text">
          <h3>Your listed vans</h3>
          <Link to="/host/vans"><p>View all</p></Link>
        </div>
        {data ? allvans() : "Loading..."}
      </div>
    </div>
  )
}

export default HostDashboard