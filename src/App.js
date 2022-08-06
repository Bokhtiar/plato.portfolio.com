import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Index from "./User/UserHome";
import Footer from "./User/Layouts/Partial/Footer";
import Navbar from "./User/Layouts/Partial/Navbar";
import BlogList from "./User/Blog/BlogList";
import SingleBlog from "./User/Blog/SingleBlog";
import About from "./User/About/About";
import Resume from "./User/Resume/Resume";
import Project from "./User/Project/Project";
import InnerContent from "./User/Layouts/InnerContent";

function App() {
  return (
    <div className="App">

      <BrowserRouter>    
      <Routes>
    
          <Route path="/" element={<InnerContent />}>
              <Route path="/" element={<Index />} />
              <Route path="/blog" element={<BlogList/>}></Route>
              <Route path="/blog/detail/:id" element={ <SingleBlog /> }></Route>
              <Route path="/about" element={ <About  /> }></Route>
              <Route path="/resume" element={ <Resume /> }></Route>
              <Route path="/project" element={ <Project  /> }></Route>
          </Route>

        </Routes>
      </BrowserRouter>     
    
    </div>
  );
}

export default App;
