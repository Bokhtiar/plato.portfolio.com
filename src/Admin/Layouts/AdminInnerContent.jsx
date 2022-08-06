import AdminFooter from "./Partial/Footer"
import AdminHeader from "./Partial/Header"
import AdminSidebar from "./Partial/Sidebar"
import DashboardHome from "../Dashboard/DashboardHome"


/*links css*/
import('./Assets/img/favicon.png')
import('https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Nunito:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i')
import('./Assets/vendor/bootstrap/css/bootstrap.min.css')
import('./Assets/vendor/bootstrap-icons/bootstrap-icons.css')
import('./Assets/vendor/boxicons/css/boxicons.min.css')
import('./Assets/vendor/quill/quill.snow.css')
import('./Assets/vendor/quill/quill.bubble.css')
import('./Assets/vendor/remixicon/remixicon.css')
import('./Assets/vendor/simple-datatables/style.css')
import('./Assets/css/style.css')

/*links js*/


const AdminInnerContent  = () => {
    return(
        <div>
            <AdminHeader></AdminHeader>
            <AdminSidebar></AdminSidebar>
            <main id="main" class="main">
                <DashboardHome></DashboardHome>
            </main>
            <AdminFooter></AdminFooter>
        </div>
    )
}
export default AdminInnerContent