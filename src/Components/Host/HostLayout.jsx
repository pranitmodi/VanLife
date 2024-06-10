import { Outlet } from "react-router-dom"
import HostNav from "./HostNav/HostNav"

const HostLayout = () => {
  return (
    <>
        <HostNav/>
        <Outlet/>
    </>
  )
}

export default HostLayout