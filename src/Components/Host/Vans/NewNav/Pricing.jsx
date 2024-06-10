import './styles.css'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Pricing = () => {
    const params = useParams()
    const [data, setdata] = useState()

    useEffect(() => {
        fetch(`/api/vans/${params.id}`)
        .then(res => res.json())
        .then(data => setdata(data.vans))
    },[params.id])

  return (
    <div className="price_main">
        {data ? 
            <h2>${data.price}.00/day</h2>
        : "Loading..."}
    </div>
  )
}

export default Pricing