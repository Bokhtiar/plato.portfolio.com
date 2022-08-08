import { Link } from "react-router-dom"

const AdminSidebar = () => {
    return (
        <section>
            <aside id="sidebar" className="sidebar">

                <ul className="sidebar-nav" id="sidebar-nav">

                    <li className="nav-item">
                        <a className="nav-link " href="index.html">
                            <i className="bi bi-grid"></i>
                            <span>Dashboard</span>
                        </a>
                    </li>


                    <li className="nav-item">
                        <Link className="nav-link collapsed" to="web-setting">
                            <i className="bi bi-file-earmark"></i>
                            <span>Web-Settings</span>
                        </Link>
                    </li>
                    
                </ul>

            </aside>
        </section>
    )
}
export default AdminSidebar