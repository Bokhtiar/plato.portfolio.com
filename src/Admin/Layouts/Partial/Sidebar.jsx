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
                        <Link className="nav-link collapsed" to="/admin/resume">
                            <i className="bi bi-file-earmark"></i>
                            <span>Resume</span>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link collapsed" to="/admin/contact">
                            <i className="bi bi-file-earmark"></i>
                            <span>Contact</span>
                        </Link>
                    </li>
 
                    <li className="nav-item">
                        <Link className="nav-link collapsed" to="/admin/project">
                            <i className="bi bi-file-earmark"></i>
                            <span>Project</span>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link collapsed" to="/admin/category">
                            <i className="bi bi-file-earmark"></i>
                            <span>Category</span>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link collapsed" to="/admin/about">
                            <i className="bi bi-file-earmark"></i>
                            <span>About</span>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link collapsed" to="/admin/blog">
                            <i className="bi bi-file-earmark"></i>
                            <span>Blog</span>
                        </Link>
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