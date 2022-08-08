import AdminFooter from "./Partial/Footer"
import AdminHeader from "./Partial/Header"
import AdminSidebar from "./Partial/Sidebar"
import { Outlet } from 'react-router-dom'

/*links css*/

//import('https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Nunito:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i')
//import('../../Admin/Layouts/Assets/vendor/bootstrap/css/bootstrap.min.css')
import('../../Admin/Layouts/Assets/vendor/bootstrap-icons/bootstrap-icons.css')
import('../../Admin/Layouts/Assets/vendor/boxicons/css/boxicons.min.css')
import('../../Admin/Layouts/Assets/vendor/quill/quill.snow.css')
import('../../Admin/Layouts/Assets/vendor/quill/quill.bubble.css')
import('../../Admin/Layouts/Assets/vendor/remixicon/remixicon.css')
import('../../Admin/Layouts/Assets/vendor/simple-datatables/style.css')
import('../../Admin/Layouts/Assets/css/style.css')

/*links js*/


const AdminInnerContent  = () => {

    return(
        <div> 
            <AdminHeader></AdminHeader>
            <AdminSidebar></AdminSidebar>
            <main id="main" class="main">
                <Outlet/>
            </main>
            <AdminFooter></AdminFooter>
        </div>
    )
}
export default AdminInnerContent