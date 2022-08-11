import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Index from "./User/UserHome";
import BlogList from "./User/Blog/BlogList";
import SingleBlog from "./User/Blog/SingleBlog";
import About from "./User/About/About";
import Resume from "./User/Resume/Resume";

import InnerContent from "./User/Layouts/InnerContent"; //this layout for user
import AdminInnerContent from "./Admin/Layouts/AdminInnerContent"; //this layout for admin
import ProtectedRoutes from './Admin/Layouts/ProtectedRoute';
import AdminLogin from "./Admin/Auth/Login";
import DashboardHome from "./Admin/Dashboard/DashboardHome";
import WebSetting from './Admin/Dashboard/WebSetting/WebSetting'
import WebSettingList from "./Admin/Dashboard/WebSetting/websettingList";
import ResumeList from "./Admin/Dashboard/Resume/List";
import ContactList from "./Admin/Dashboard/Contact/List";
import ContactShow from "./Admin/Dashboard/Contact/Show";
import ResumeCreate from "./Admin/Dashboard/Resume/Create";
import ProjectList from "./Admin/Dashboard/Project/List";
import ProjectShow from "./Admin/Dashboard/Project/Show";
import ProjectCreate from "./Admin/Dashboard/Project/Create";
import CategoryList from "./Admin/Dashboard/Category/List";
import CategoryCreate from "./Admin/Dashboard/Category/Create";


function App() {


  return (
    <div className="App">

      <BrowserRouter>     
      <Routes>
        
          {/* no protected route start */}
          <Route path="/" element={<InnerContent />}>
              <Route path="/" element={<Index />} />
              <Route path="/blog" element={<BlogList/>}></Route>
              <Route path="/blog/detail/:id" element={ <SingleBlog /> }></Route>
              <Route path="/about" element={ <About  /> }></Route>
              <Route path="/resume" element={ <Resume /> }></Route>
              <Route path="/admin/login" element={ <AdminLogin  /> }></Route>
          </Route>
          {/* no protected route end */}


           {/** admin Routes */}
           <Route path="/" element={<ProtectedRoutes />}>
            <Route path="/" element={<AdminInnerContent />}>
              <Route path="/" element={<Navigate replace to="admin/dashboard" />} />
              <Route path="admin/dashboard" element={<DashboardHome />} />
              <Route path="web-setting" element={<WebSetting />} />
              <Route path="web-setting-list" element={<WebSettingList />} />
              <Route path="admin/resume" element={<ResumeList />} />
              <Route path="admin/resume/create" element={<ResumeCreate />} />
              <Route path="admin/resume/edit/:id" element={<ResumeCreate />} />

              <Route path="admin/project" element={<ProjectList />} />
              <Route path="admin/project/:id" element={<ProjectShow />} />
              <Route path="admin/project/create" element={<ProjectCreate />} />
              {/* category */}
              <Route path="admin/category" element={<CategoryList />} />
              <Route path="admin/category/create" element={<CategoryCreate />} />

              <Route path="admin/contact" element={<ContactList />} />
              <Route path="admin/contact/:id" element={<ContactShow />} />
              
            </Route>
          </Route>





        </Routes>
      </BrowserRouter>     
    
    </div>
  );
}

export default App;
