import './HostI.css'
import { useState } from 'react'

const HostIncome = () => {

  const [data, setdata] = useState([452,856,635,964,964,964,964,854,746])

  const allT = () => {

    const today = new Date();
    const month = today.getMonth()+1;
    const year = today.getFullYear();
    let date = today. getDate();


    const allTra = []
    data.map((ele,i) => {
      let currentDate = `${date}/${month}/${year}`;
      allTra.push(<div key={i} className="transc">
        <h2>${ele}</h2>
        <h4>{currentDate}</h4>
      </div>)
      date = date - 1
    } )

    return allTra
  }

  const okay = () => {
    let sum = 0
    data.map(ele => {sum = sum + ele})
    return sum
  }

  return (
    <div className="hostincome_main">
      <div className="top">
        <h1>Income</h1>
        <p>Last <span>30 days</span></p>
      </div>
      <h1>$ {okay()}</h1>
      <h2>Your transactions {`(${data.length})`}</h2>
      <div className="transactions">
        {allT()}
      </div>
    </div>
  )
}

export default HostIncome