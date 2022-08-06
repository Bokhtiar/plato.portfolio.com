import { Outlet } from 'react-router-dom'
import Footer from "./Partial/Footer"
import Navbar from "./Partial/Navbar"


/*links */


import('./Assets/css/bootstrap.min.css')
import('./Assets/css/unicons.css')

import('./Assets/css/owl.theme.default.min.css')
import('./Assets/css/blog.css')
import('./Assets/css/tooplate-style.css')

const InnerContent = () => {
    console.log('user inner content')
    return (
        <section>
             <Navbar /> 
                <Outlet/>
            <Footer />  
        </section>
    ) 
}
export default InnerContent