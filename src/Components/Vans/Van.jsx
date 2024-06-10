/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import './Vans.css'

const Van = (props) => {

    const col = (type) => {
        const colorBg = {"simple":"#E17654","luxury":"#161616","rugged":"#115E59"}
        return colorBg[type]
    }

    return (
        <Link to={`/van/${props.id}`}>
            <div className="van_main">
                <img src={props.img} alt="" />
                <div className="text">
                    <h3>{props.title}</h3>
                    <div className="price">
                        <h3>${props.price}</h3>
                        <p>/day</p>
                    </div>
                </div>
                <div style={{backgroundColor: col(props.type)}} className="type">
                    {props.type}
                </div>
            </div>
        </Link>
    )
}

export default Van