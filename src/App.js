import Index from "./Components/Portfolio/Index";
import Footer from "./Partial/Footer";
import Navbar from "./Partial/Navbar";

function App() {
  return (
    <div className="App">
    {/*Navbar*/}
    <Navbar />  
    {/*main container start here*/}
    <Index />
    {/*main content end here*/}
     {/* FOOTER  */}
    <Footer />
    </div>
  );
}

export default App;
