import { Route, Routes } from "react-router-dom";
import HeaderTop from "./components/HeaderTop";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";



function App() {
  return (
    <div className="App">
      <HeaderTop/>
      
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about-us" element={<AboutUs/>} />
        </Routes>
    </div>
  );
}

export default App;
