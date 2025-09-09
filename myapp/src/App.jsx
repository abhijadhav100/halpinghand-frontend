
import Navbar from './Templates/Navbar';
import Signin from './Templates/Signin';
import Signup from './Templates/Signup';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './Context/AuthContext';
import ProtectedRoute from './ProtectedRoute';
import SliderBody from './Templates/SliderBody';
import Footer from './Templates/Footer';
import Donate from './Templates/Donate';
import About from './Templates/About';
import Dashboard from './Templates/Dashboard';
import Contact from './Templates/Contact';
import DonarsDetails from './Templates/DonarsDetails';
import VeterinaryFound from './Templates/VeterinaryFound';

function App() {
  return (
   <>
   <AuthProvider>
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<SliderBody/>}/>
        <Route exact path="/signin" element={<Signin/>}/>
        <Route exact path="/signup" element={<Signup/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/donate" element={<Donate/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
        <Route exact path="/veterinary-foundation" element={<VeterinaryFound/>}/>
        <Route exact path="/dashboard" element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
        <Route exact path="/donarsdetails" element={<ProtectedRoute><DonarsDetails/></ProtectedRoute>}/>
      </Routes>
      <Footer/>
    </Router>
    </AuthProvider>
   </>
  );  
}

export default App;
