import Footer from "./Partial/Footer"
import Navbar from "./Partial/Navbar"
import { Outlet } from 'react-router-dom'

const InnerContent = () => {
    return (
        <section>
             <Navbar />  
                <Outlet/>
            <Footer />  
        </section>
    )
}
export default InnerContent