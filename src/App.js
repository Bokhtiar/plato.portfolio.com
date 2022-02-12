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

function App() {
  return (
    <div className="App">

      <BrowserRouter>    

          {/*Navbar*/}
          <Navbar />  
            <Routes>
              <Route path="/" element={<Index />}></Route>
              <Route path="/blog" element={<BlogList/>}></Route>
              <Route path="/blog/detail" element={ <SingleBlog /> }></Route>
              <Route path="/about" element={ <About  /> }></Route>
            </Routes>
          {/* FOOTER  */}
          <Footer />

      </BrowserRouter>     
    
    </div>
  );
}

export default App;
