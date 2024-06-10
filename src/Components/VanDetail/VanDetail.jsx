// import Nav from '../Nav/Nav'
import { Link, useParams } from 'react-router-dom'
import './VanD.css'
import { useEffect, useState } from 'react'
// import Footer from '../Footer/Footer'

const VanDetail = () => {

    const params = useParams()
    const [data, setdata] = useState([])

    const col = (type) => {
        const colorBg = {"simple":"#E17654","luxury":"#161616","rugged":"#115E59"}
        return colorBg[type]
    }

    useEffect(() => {
        fetch(`/api/vans/${params.id}`)
        .then(res => res.json())
        .then(data => setdata(data.vans))
    },[params.id])

    console.log(data)

    return (
        <div className="vandetail_main">
            <Link className='link' to="/vans"><i className="ri-arrow-left-line"></i><p>Back to all vans</p></Link>
            <div className="details_main">
                <img src={data.imageUrl} alt="" />
                <div style={{backgroundColor: col(data.type)}} className="type">{data.type}</div>
                <h1>{data.name}</h1>
                <h3>${data.price}/day</h3>
                <p>{data.description}</p>
            </div>
            <div className="cta"><Link to="/signIn"><p>Rent this van</p></Link></div>
        </div>
    )
}

export default VanDetail