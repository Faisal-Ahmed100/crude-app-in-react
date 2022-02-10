import "./App.css";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Navbar from "./components/pages/Navbar";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Footer from "./components/pages/Footer";
import Error from "./components/pages/Error";
import AddUsers from "./components/AddUsers";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import EditUsers from "./components/EditUser";
import VeiwUsers from "./components/VeiwUsers";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar />
        <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="*" element={<Error />} />
        <Route path="/addusers" element={<AddUsers />} />
        <Route path="/newuser" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/edit/:id" element={<EditUsers />} />
        <Route path="/veiw/:id" element={<VeiwUsers />} />
        
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
