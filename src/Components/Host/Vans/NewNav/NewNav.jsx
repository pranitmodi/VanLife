import './styles.css'
import { Link, useParams } from 'react-router-dom'

const NewNav = () => {

    const params = useParams()
    console.log(params)

  return (
    <div className="newnav_main">
        <Link to={`/host/vans/${params.id}/details`}><h3>Details</h3></Link>
        <Link to={`/host/vans/${params.id}/price`}><h3>Pricing</h3></Link>
        <Link to={`/host/vans/${params.id}/photos`}><h3>Photos</h3></Link>
    </div>
  )
}

export default NewNav