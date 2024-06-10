import './styles.css'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Photos = () => {
    const params = useParams()
    const [data, setdata] = useState()

    useEffect(() => {
        fetch(`/api/vans/${params.id}`)
        .then(res => res.json())
        .then(data => setdata(data.vans))
    },[params.id])

  return (
    <div className="photo_main">
        {data ? 
            <img src={data.imageUrl} alt="" />
        : "Loading..."}
    </div>
  )
}

export default Photos