import Index from "./Components/Portfolio/Index";
import Footer from "./Partial/Footer";
import Navbar from "./Partial/Navbar";
import BlogList from "./Components/Blog/BlogList";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <BrowserRouter>    
        {/*Navbar*/}
        <Navbar />  
          <Routes>
            <Route path="/" element={<Index />}></Route>
            <Route path="/blog" element={<BlogList/>}></Route>
          </Routes>
        {/* FOOTER  */}
        <Footer />
    </BrowserRouter>     
    </div>
  );
}

export default App;
