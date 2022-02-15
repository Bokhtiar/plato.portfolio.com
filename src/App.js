import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Index from "./Components/Portfolio/Index";
import Footer from "./Partial/Footer";
import Navbar from "./Partial/Navbar";
import BlogList from "./Components/Blog/BlogList";
import SingleBlog from "./Components/Blog/SingleBlog";
import About from "./Components/Portfolio/About/About";
import Resume from "./Components/Portfolio/Resume/Resume";
import Project from "./Components/Portfolio/Project/Project";

function App() {
  return (
    <div className="App">

      <BrowserRouter>    

          {/*Navbar*/}
          <Navbar />  
            <Routes>
              <Route path="/" element={<Index />}></Route>
              <Route path="/blog" element={<BlogList/>}></Route>
              <Route path="/blog/detail/:id" element={ <SingleBlog /> }></Route>
              <Route path="/about" element={ <About  /> }></Route>
              <Route path="/resume" element={ <Resume /> }></Route>
              <Route path="/project" element={ <Project  /> }></Route>
            </Routes>
          {/* FOOTER  */}
          <Footer />

      </BrowserRouter>     
    
    </div>
  );
}

export default App;
