
import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";



function App() {
  return (
   
   <Router>
      <Header/>
    <Routes>
  
    
      <Route path="/" element={<Home />}/>
      <Route path="/checkout" element={<Checkout/>}/>
      <Route path = "/login" element={<Login/>}/>

    
    </Routes>
   </Router>
  );
}

export default App;
