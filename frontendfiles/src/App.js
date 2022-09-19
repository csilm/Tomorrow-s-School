import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './App.css';
import Home from "./components/home/Home";
import JoinUs from './components/JoinUs/JoinUs';
import Footer from './shared/Footer';
import Navigation from './shared/Navigation';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        
        <Routes>
          <Route path="home" element={<Home/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="joinus" element={<JoinUs/>} />   
         
        </Routes>
        <Footer />
  </BrowserRouter>
    </div>
  );
}

export default App;
