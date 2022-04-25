import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Button from './Components/button/button';
import Register from './pages/register/register';
import Login from './pages/login/login';
import Home from './pages/home/home';
import Upcoming from './pages/student/upcoming';
import Past from './pages/student/past';
import Book from './pages/student/book';
import UpcomingCounsellor from './pages/Counsellor/UpcomingCounsellor';
import DashboardAdmin from './pages/admin/dashboardAdmin';

function App() {
  return (
    <>
    <div className="app">
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/dashboard" element={<DashboardAdmin/>}/>
      </Routes>
    </Router>
    </div>
    </>
  );
}

export default App;
