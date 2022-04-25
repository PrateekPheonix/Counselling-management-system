import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from './pages/register/register';
import Login from './pages/login/login';
import Dashboard from './pages/dashboard';
import DashboardAdmin from "./pages/admin/dashboardAdmin";

function App() {

  return (
    <>
    <div className="app">
    <Router>
      <Routes>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </Router>
    </div>
    </>
  );
}

export default App;
