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
              {/* category start */}
              {/* <Route path="admin/category" element={<CategoryList />} />
              <Route path="admin/category/create" element={<CategoryCreate />} /> */}
          
            </Route>
          </Route>





        </Routes>
      </BrowserRouter>     
    
    </div>
  );
}

export default App;
