import './HostV.css'
import { Link, Outlet, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import NewNav from './NewNav/NewNav'

const HostVanEach = () => {

    const params = useParams()
    const [data, setdata] = useState()

    useEffect(() => {
        fetch(`/api/vans/${params.id}`)
        .then(res => res.json())
        .then(data => setdata(data.vans))
    },[params.id])

    const col = (type) => {
        const colorBg = {"simple":"#E17654","luxury":"#161616","rugged":"#115E59"}
        return colorBg[type]
    }


    return (
        <div className="vaneach_all">
            <Link className='link_each' to="/host/vans"><i className="ri-arrow-left-line"></i><p>Back to all vans</p></Link>
            {data ? 
                <div className="v_main">
                    <div className="content">
                        <img src={data.imageUrl} alt="" />
                        <div className="content_text">
                            <div style={{backgroundColor: col(data.type)}} className="type">{data.type}</div>
                            <h1>{data.name}</h1>
                            <h2>${data.price}/day</h2>
                        </div>
                    </div>
                    <NewNav/>
                    <Outlet/>
                </div>
            : ""}
        </div>
    )
}

export default HostVanEach