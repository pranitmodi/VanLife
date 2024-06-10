import './styles.css'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Details = () => {

    const params = useParams()
    const [data, setdata] = useState()

    useEffect(() => {
        fetch(`/api/vans/${params.id}`)
        .then(res => res.json())
        .then(data => setdata(data.vans))
    },[params.id])

  return (
    <div className="details_main">
        {data ? 
        <>
            <p><span>Name: </span>{data.name}</p>
            <p><span>Category: </span>{data.type}</p>
            <p><span>Description: </span>{data.description}</p>
        </> : "Loading..."}
    </div>
  )
}

export default Details