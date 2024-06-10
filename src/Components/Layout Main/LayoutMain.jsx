import { Outlet } from "react-router-dom"
import Nav from "../Nav/Nav"
import Footer from "../Footer/Footer"

const LayoutMain = () => {
  return (
    <>
        <Nav/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default LayoutMain