
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Services from "./Components/Services";
import Clients from "./Components/Clients";

function App() {
  return (
   <>
    <Router>
    <Navbar/>

    <Routes>

          
          <Route exact path="/service" element={<Services/>}></Route> 
          <Route exact path="/client" element={<Clients/>}></Route> 
          <Route exact path="/" element={<Home/>}></Route> 
        </Routes>
        </Router>
   
   </>
  );
}

export default App;
